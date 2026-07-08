const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

const Product = require("./models/productModel");
const products = require("./data/products.json");

dotenv.config({ path: path.join(__dirname, "config", "config.env") });

mongoose.connect(process.env.DB_URL).then(async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);

    console.log("Products Imported!");
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
});