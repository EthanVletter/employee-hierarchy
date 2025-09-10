import React, { useEffect, useState } from "react";
import { fetchEmployees } from "../api/employeeApi";

export const EmployeeTable: React.FC = () => {
  const [employees, setEmployees] = useState<any[]>([]);

  useEffect(() => {
    fetchEmployees().then(setEmployees);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Employees</h2>
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">#</th>
            <th className="p-2">Name</th>
            <th className="p-2">Role</th>
            <th className="p-2">Manager</th>
            <th className="p-2">Avatar</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((e) => (
            <tr key={e.id} className="border-t">
              <td className="p-2">{e.employee_number}</td>
              <td className="p-2">
                {e.first_name} {e.last_name}
              </td>
              <td className="p-2">{e.role}</td>
              <td className="p-2">{e.manager_id || "-"}</td>
              <td className="p-2">
                <img
                  src={e.avatar}
                  alt="avatar"
                  style={{ width: 36, height: 36, borderRadius: 18 }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
