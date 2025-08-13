import dotenv from "dotenv";
dotenv.config({
  path: "./.env", //by default root
});
let myusername = process.env.myusername;
console.log(myusername);
console.log("PMP/index.js loaded");
