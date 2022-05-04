const mongoose = require("mongoose");

// Create Schema
const staffSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  occupation: {
    type: String,
    required: true,
    trim: true,
  },
  mobile: {
    type: Number,
    required: true,
    unique: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
});

const staff=mongoose.model("staff",staffSchema);

module.exports = staff;