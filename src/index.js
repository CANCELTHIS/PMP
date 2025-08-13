import dotenv from "dotenv";
import express from "express";
import app from "./app.js";
dotenv.config({
  path: "./.env",
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listning on: ${port}`);
});
