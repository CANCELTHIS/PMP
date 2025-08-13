import express from "express";
const app = express();

app.get("/", (req, res) => {
  console.log("Home page");
});
export default app;
