// import React, { useEffect, useState } from "react";
import { useEffect, useState } from "react";
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
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Employee Hierarchy Manager
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Table receives employees as a prop */}
        <div className="bg-white rounded-2xl shadow p-4">
          <EmployeeTable employees={employees} />
        </div>

        {/* OrgChart receives the same employees as a prop */}
        <div className="bg-white rounded-2xl shadow p-4">
          <OrgChart employees={employees} />
        </div>

        {/* Form can add new employees */}
        <div className="bg-white rounded-2xl shadow p-4">
          <EmployeeForm onEmployeeCreated={handleEmployeeCreated} />
        </div>
      </div>
    </div>
  );
}
