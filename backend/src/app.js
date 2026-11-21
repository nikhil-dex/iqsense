import cors from "cors";
import express from "express";

export function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  app.get("/api/items", (_req, res) => {
    res.json([
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
    ]);
  });

  app.use((_req, res) => {
    res.status(404).json({ error: "Route not found" });
  });

  app.use((error, _req, res, _next) => {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  });

  return app;
}
