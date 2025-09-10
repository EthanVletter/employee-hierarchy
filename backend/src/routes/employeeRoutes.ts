import { Router } from "express";
import * as service from "../services/employeeService";
import { gravatarUrl } from "../utils/gravatar";

const employeeRoutes = Router();

employeeRoutes.get("/", async (req, res) => {
  try {
    const employees = await service.getAllEmployees();
    const enriched = employees.map((e) => ({
      ...e,
      avatar: gravatarUrl(e.email ?? undefined),
    }));
    res.json(enriched);
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
});

employeeRoutes.get("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const e = await service.getEmployeeById(id);
    if (!e) {
      return res.status(404).json({ error: "Not found" });
    }
    res.json({ ...e, avatar: gravatarUrl(e.email ?? undefined) });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
});

employeeRoutes.post("/", async (req, res) => {
  try {
    const created = await service.createEmployee(req.body);
    res
      .status(201)
      .json({ ...created, avatar: gravatarUrl(created.email ?? undefined) });
  } catch (err: any) {
    res.status(400).json({ error: err.message ?? String(err) });
  }
});

employeeRoutes.put("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const updated = await service.updateEmployee(id, req.body);
    res.json({ ...updated, avatar: gravatarUrl(updated.email ?? undefined) });
  } catch (err: any) {
    res.status(400).json({ error: err.message ?? String(err) });
  }
});

employeeRoutes.delete("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    await service.deleteEmployee(id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
});

export default employeeRoutes;
