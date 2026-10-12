const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors=require('cors');
const path = require("path");
dotenv.config({ path: path.join(__dirname, "config", "config.env") });

const products = require("./routes/product");
const orders = require("./routes/order");
const connectDatabase = require("./config/connectDatabase");
connectDatabase();

app.use(express.json());
app.use(cors())
app.use("/api/v1", products);
app.use("/api/v1/", orders);
if (require.main === module) {
  const connectDatabase = require("./config/connectDatabase");

  connectDatabase()
    .then(() => {
      app.listen(process.env.PORT || 8000, () => {
        console.log("Server started");
      });
    })
    .catch((error) => {
      console.error("Database connection failed:", error.message);
      process.exit(1);
    });
}

module.exports = app;
