import React from "react";
import type { EmployeeRow as Employee } from "../types/employee";

interface EmployeeTableProps {
  employees: Employee[];
}

export const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Employees</h2>
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">id #</th>
            <th className="p-2">Employee-number</th>
            <th className="p-2">Name</th>
            <th className="p-2">Role</th>
            <th className="p-2">Manager</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((e) => (
            <tr key={e.id} className="border-t">
              <td className="p-2">{e.id}</td>
              <td className="p-2">{e.employee_number}</td>
              <td className="p-2">
                {e.first_name} {e.last_name}
              </td>
              <td className="p-2">{e.role}</td>
              <td className="p-2">{e.manager_id ?? "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
