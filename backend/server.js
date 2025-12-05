const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const testRoute = require("./routes/testRoute")
const userRoutes = require("./routes/userRoutes")
const resourceRoutes = require("./routes/resourceRoutes");


const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use("/api/test", testRoute);
app.use("/api/users", userRoutes);
app.use("/api/resources", resourceRoutes);


app.get("/", (req, res) => {
  res.send("Backend is working!");
})

connectDB().then(() => {
  app.listen(PORT, () => {
      console.log(`Server Running On Port ${PORT}`);
    });
});




