import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

console.log(process.env.DATABASE_URL);

app.get("/check", (req, res) => {
  res.status(200).json({
    ip: req.ip,
    message: "i am coonected",
    url: process.env.DATABASE_URL,
  });
});

app.listen(4000, () => {
  console.log("server is connected");
});
