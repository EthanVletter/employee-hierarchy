import React, { useState } from "react";
import { createEmployee } from "../api/employeeApi";
import type { EmployeeRow, NewEmployee } from "../types/employee";

interface Props {
  onEmployeeCreated: (employee: EmployeeRow) => void;
}

export const EmployeeForm: React.FC<Props> = ({ onEmployeeCreated }) => {
  const [employee, setEmployee] = useState<NewEmployee>({
    first_name: "",
    last_name: "",
    birth_date: "",
    employee_number: "",
    salary: 0,
    role: "",
    email: "",
    manager_id: undefined,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newEmployee = await createEmployee(employee);
    onEmployeeCreated(newEmployee);
    setEmployee({
      first_name: "",
      last_name: "",
      birth_date: "",
      employee_number: "",
      salary: 0,
      role: "",
      email: "",
      manager_id: undefined,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: 10 }}
    >
      <input
        name="first_name"
        placeholder="First Name"
        value={employee.first_name}
        onChange={handleChange}
        required
      />
      <input
        name="last_name"
        placeholder="Last Name"
        value={employee.last_name}
        onChange={handleChange}
        required
      />
      <input
        name="birth_date"
        type="date"
        value={employee.birth_date}
        onChange={handleChange}
        required
      />
      <input
        name="employee_number"
        placeholder="Employee Number"
        value={employee.employee_number}
        onChange={handleChange}
        required
      />
      <input
        name="salary"
        type="number"
        placeholder="Salary"
        value={employee.salary}
        onChange={handleChange}
        required
      />
      <input
        name="role"
        placeholder="Role"
        value={employee.role}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        placeholder="Email"
        value={employee.email ?? ""}
        onChange={handleChange}
      />
      <input
        name="manager_id"
        type="number"
        placeholder="Manager ID"
        value={employee.manager_id ?? ""}
        onChange={handleChange}
      />
      <button type="submit">Add Employee</button>
    </form>
  );
};
