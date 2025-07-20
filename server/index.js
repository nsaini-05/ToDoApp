import express from "express";
import cors from "cors";
import path from "path";
import { dbConnection } from "./database.js";
import todoRoutes from "./routes/todoRoutes.js";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const connectionResult = dbConnection();
connectionResult
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

app.use("/todos", todoRoutes);

const frontendPath = path.resolve(__dirname, "../client/build");

app.use(express.static(frontendPath));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(frontendPath, "index.html"));
});

app.get("/", (req, res) => {
  res.send("Hello to ToDO API");
});
