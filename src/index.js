import dotenv from "dotenv";
import express from "express";
dotenv.config({
  path: "./.env",
});

const app = express();

const port = process.env.PORT || 3000;

app.get("/insta", (req, res) => {
  res.send("insta");
});
app.listen(port, () => {
  console.log(`Listning on: ${port}`);
});
