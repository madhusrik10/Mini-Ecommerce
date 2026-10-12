
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

dotenv.config({
  path: path.join(__dirname, "config", "config.env"),
});

const app = express();

const products = require("./routes/product");
const orders = require("./routes/order");
const connectDatabase = require("./config/connectDatabase");

app.use(express.json());
app.use(cors());

app.use("/api/v1", products);
app.use("/api/v1/", orders);

// Vercel handles incoming requests when the app is exported.
module.exports = app;

// Start a local server only when running directly.
if (require.main === module) {
  connectDatabase()
    .then(() => {
      const PORT = process.env.PORT || 8000;

      app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
      });
    })
    .catch((error) => {
      console.error("Database connection failed:", error.message);
      process.exit(1);
    });
}
