import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());

// serve static json
app.use("/api", express.static(path.join(__dirname, "api")));

// contoh route test
app.get("/", (req, res) => {
  res.json({ message: "Wilayah API is running 🚀" });
});

// ❌ jangan pakai app.listen()
// ✅ export app biar bisa dipakai Vercel
export default app;
