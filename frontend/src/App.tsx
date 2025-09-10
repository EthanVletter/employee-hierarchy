import React, { useEffect, useState } from "react";
import { EmployeeTable } from "./components/EmployeeTable";
import { EmployeeForm } from "./components/EmployeeForm";
import { OrgChart } from "./components/OrgChart";
import { fetchEmployees } from "./api/employeeApi";
import type { EmployeeRow as Employee } from "./types/employee";

export default function App() {
  // App-level state for all employees
  const [employees, setEmployees] = useState<Employee[]>([]);

  // Fetch employees once when the app mounts
  useEffect(() => {
    fetchEmployees().then(setEmployees);
  }, []);

  // Handler for when a new employee is created via the form
  const handleEmployeeCreated = (newEmployee: Employee) => {
    setEmployees((prev) => [...prev, newEmployee]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ fontSize: 28 }}>Employee Hierarchy Manager</h1>

      <div style={{ display: "flex", gap: 20 }}>
        {/* Table receives employees as a prop */}
        <div style={{ flex: 1 }}>
          <EmployeeTable employees={employees} />
        </div>

        {/* OrgChart receives the same employees as a prop */}
        <div style={{ flex: 1 }}>
          <OrgChart employees={employees} />
        </div>

        {/* Form can add new employees */}
        <div style={{ flex: 1 }}>
          <EmployeeForm onEmployeeCreated={handleEmployeeCreated} />
        </div>
      </div>
    </div>
  );
}
