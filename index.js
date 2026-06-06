const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const bookRoutes = require("./routes/books");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/books", bookRoutes);

// DB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
