require('dotenv').config();
const mongoose = require('mongoose');
const db = process.env.DB;

const connectDB = async (func) => {
  try {
    const conn = await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
      // useCreateIndex: true,
      // useMongoClient: true
    });
    console.log(console.log("Connected to database"));
    await func();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = connectDB;