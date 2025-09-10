import { pool } from "../db/pool";
import { EmployeeRow } from "../types/employee";

/* -------------------- Main database logic (db queries) -------------------- */

export async function getAllEmployees(): Promise<EmployeeRow[]> {
  const res = await pool.query("SELECT * FROM employees ORDER BY id");
  return res.rows;
}

export async function getEmployeeById(id: number): Promise<EmployeeRow | null> {
  const res = await pool.query("SELECT * FROM employees WHERE id = $1", [id]);
  return res.rows[0] ?? null;
}

export async function createEmployee(
  data: Partial<EmployeeRow>
): Promise<EmployeeRow> {
  // check that manager is not equal to self
  if (data.manager_id) {
    const cycle = await causesCycle(data.manager_id, null);
    if (cycle) throw new Error("Manager assignment would create a cycle.");
  }
  const result = await pool.query(
    `INSERT INTO employees (first_name, last_name, birth_date, employee_number, salary, role, email, manager_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
    [
      data.first_name,
      data.last_name,
      data.birth_date,
      data.employee_number,
      data.salary,
      data.role,
      data.email || null,
      data.manager_id || null,
    ]
  );
  return result.rows[0];
}

export async function updateEmployee(
  id: number,
  data: Partial<EmployeeRow>
): Promise<EmployeeRow> {
  if (data.manager_id !== undefined) {
    if (data.manager_id === id) {
      throw new Error("Employee cannot be their own managaer.");
    }
    const cycle = await causesCycle(data.manager_id || null, id);
    if (cycle) throw new Error("Manager assignment would create a cycle.");
  }
  // coalesce will choose new value if it exists, otherwise it will use the defaulft (current)
  const result = await pool.query(
    `UPDATE employees SET 
    first_name = COALESCE($1, first_name),
    last_name = COALESCE($2, last_name),
    birth_date = COALESCE($3, birth_date),
    employee_number= COALESCE($4, employee_number),
    salary = COALESCE($5, salary),
    role = COALESCE($6, role),
    email = COALESCE($7, email),
    manager_id = $8,
    WHERE id = $9 RETURNING *`,
    [
      data.first_name,
      data.last_name,
      data.birth_date,
      data.employee_number,
      data.salary,
      data.role,
      data.email || null,
      data.manager_id || null,
      id,
    ]
  );

  return result.rows[0];
}

export async function deleteEmployee(id: number): Promise<void> {
  await pool.query("DELETE FROM employees WHERE id = $1", [id]);
}

/* -------------------- Helper function to detect cycles -------------------- */

async function causesCycle(
  candidateManagerId: number | null,
  employeeId: number | null
): Promise<boolean> {
  if (!candidateManagerId) return false;
  let current = candidateManagerId;
  const seen = new Set<number>();
  while (current) {
    if (employeeId !== null && current === employeeId) return true;
    if (seen.has(current)) return true; //defensive: loop detection
    seen.add(current);
    const res = await pool.query(
      "SELECT manager_id FROM employees WHERE id = $1",
      [current]
    );
    const mgrId = res.rows[0].manager_id;
    if (!mgrId) break;
    current = mgrId;
  }
  return false;
}
