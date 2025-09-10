const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export async function fetchEmployees() {
  const res = await fetch(`${API_URL}/employees`);
  return res.json();
}

export async function createEmployee(data: any) {
  const res = await fetch(`${API_URL}/employees`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
