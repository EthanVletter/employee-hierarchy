// types/employee.ts
export interface EmployeeRow {
  id: number;
  first_name: string;
  last_name: string;
  birth_date: string;
  employee_number: string;
  salary: number;
  role: string;
  email?: string | null;
  manager_id?: number | null;
}

export type NewEmployee = Omit<EmployeeRow, "id">;
