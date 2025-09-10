export interface EmployeeRow {
  id: number;
  first_name: string;
  last_name: string;
  birth_date: string;
  employee_number: string;
  salary: string;
  role: string;
  email?: string | null;
  manager_id?: number | null;
}
