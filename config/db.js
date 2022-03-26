const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const mongoDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
  } catch (error) {
    console.log(`Error Connecting to Mongo: ${error.message}`);
    // exit(1) --> Exit process with error
    process.exit(1);
  }
};

module.exports = mongoDB;
