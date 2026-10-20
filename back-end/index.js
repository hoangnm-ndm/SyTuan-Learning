import express from "express";
import dotenv from "dotenv";

dotenv.config({
  // * tuy chon
});

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Ban dang o trang home page",
  });
});

app.get("/about", (req, res) => {
  res.send("Welcome to the about page!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
