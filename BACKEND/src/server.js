const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const { connectDB } = require("./config/db");

connectDB();
const app = Express();
import notesRouter from "./routes/notes.js";

if (process.env.NODE_ENV === "development") {
  const corsOptions = {
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  };
  app.use(cors(corsOptions));
}
app.use(express.json());
app.use("/api/notes", notesRouter);
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port https://localhost:${PORT}`);
});
