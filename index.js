const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect To Database
connectDB();

// Setup Middleware
app.use(express.json());

// Parse form data
app.use(
  express.urlencoded({
    extended: false,
  })
);

// Define Routes
app.use("/", require("./routes/index"));
app.use("/api/", require("./routes/url"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
