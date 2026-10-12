
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

dotenv.config({
  path: path.join(__dirname, "config", "config.env"),
});

const app = express();
const connectDatabase = require("./config/connectDatabase");

const products = require("./routes/product");
const orders = require("./routes/order");

app.use(express.json());
app.use(cors());

// Connect before handling database-backed routes.
app.use(async (req, res, next) => {
  try {
    await connectDatabase();
    next();
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    res.status(503).json({
      message: "Database connection failed",
    });
  }
});

app.use("/api/v1", products);
app.use("/api/v1/", orders);

module.exports = app;

// Local development only.
if (require.main === module) {
  const PORT = process.env.PORT || 8000;

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}
