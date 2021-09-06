import express from "express";
import cors from "cors";

import { dbConnection } from "./database.js";
import todoRoutes from "./routes/todoRoutes.js";
import dotenv from "dotenv";
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

app.get("/", (req, res) => {
  res.send("Hello to ToDO API");
});
