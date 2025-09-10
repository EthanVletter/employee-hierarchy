import React from "react";
import type { EmployeeRow as Employee } from "../types/employee";

interface Props {
  employees: Employee[];
}

export const OrgChart: React.FC<Props> = ({ employees }) => {
  // Build a map of manager -> direct reports
  const map = new Map<number | null, Employee[]>();
  employees.forEach((e) => {
    const key = e.manager_id ?? null;
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(e);
  });

  // Recursive render function
  const renderTree = (managerId: number | null, depth = 0) => {
    const nodes = map.get(managerId) || [];
    return (
      <ul style={{ paddingLeft: depth ? 20 : 0 }}>
        {nodes.map((n) => (
          <li key={n.id}>
            <strong>
              {n.first_name} {n.last_name}
            </strong>{" "}
            - {n.role}
            {renderTree(n.id, depth + 1)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Organisation Chart</h2>
      {renderTree(null)}
    </div>
  );
};
