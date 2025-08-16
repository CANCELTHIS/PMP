import express from "express";
import cors from "cors";
const app = express();
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ limit: "16kb" }));
app.get("/", (req, res) => {
  console.log("Home page");
  res.send("Hello there!!");
});
app.use(express.static("public"));
//cors configration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "PUT", "PATCH", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type"],
  }),
);

export default app;
