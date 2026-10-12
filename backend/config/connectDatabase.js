
const mongoose = require("mongoose");

let connectionPromise = null;

const connectDatabase = async () => {
  if (!process.env.DB_URL) {
    throw new Error("DB_URL environment variable is missing");
  }

  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (!connectionPromise) {
    connectionPromise = mongoose
      .connect(process.env.DB_URL, {
        serverSelectionTimeoutMS: 10000,
      })
      .catch((error) => {
        connectionPromise = null;
        throw error;
      });
  }

  return connectionPromise;
};

module.exports = connectDatabase;
