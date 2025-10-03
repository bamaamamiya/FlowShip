// index.js
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Konversi __dirname (karena pakai ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // biar bisa diakses dari React
app.use(express.json());

// Serve folder api
app.use("/api", express.static(path.join(__dirname, "api")));

// Root check
app.get("/", (req, res) => {
  res.json({ message: "Wilayah API running..." });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server jalan di http://localhost:${PORT}`);
});
