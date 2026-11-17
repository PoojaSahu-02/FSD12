const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/db");
const empRouter = require("./routes/empRoutes");
const path = require("path");
const PORT = process.env.PORT || 5000;
connectDB();
app.use(express.static(path.join("public", "HTML")));
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/v1/", empRouter);
app.get("/", (req, res) => {
  res.render("home", { username: "john" });
});
app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "HTML", "form.html"));
});
app.post("/formSubmit", (req, res) => {
  let { username, email } = req.body;
  console.log(username, email);
  res.send("form submitted successfully");
});
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
