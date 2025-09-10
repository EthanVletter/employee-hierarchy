import React from "react";
import { EmployeeTable } from "./components/EmployeeTable";
import { OrgChart } from "./components/OrgChart";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ fontSize: 28 }}>Employee Hierarchy Manager</h1>
      <div style={{ display: "flex", gap: 20 }}>
        <div style={{ flex: 1 }}>
          <EmployeeTable />
        </div>
        <div style={{ flex: 1 }}>
          <OrgChart />
        </div>
      </div>
    </div>
  );
}
