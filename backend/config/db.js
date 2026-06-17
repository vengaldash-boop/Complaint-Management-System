const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vengaldas_harini:harini22@cluster0.eymwyed.mongodb.net/complaintsDB?retryWrites=true&w=majority"
    );

    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;