const mongoose = require("mongoose");

var url ="mongodb+srv://chinmay:chinmay@cluster0.vkhwn.mongodb.net/Canstay"

// process.env.DATABASE_URI;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection successful!");
  })
  .catch((err) => {
    console.log("Cannot connect to database");
    console.log(err);
  });