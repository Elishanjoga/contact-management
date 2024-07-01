const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide a valid name"],
  },
  email: {
    type: String,
    required: [true, "please provide a valid email"],
  },
  phone: {
    type: String,
    required: [true, "please provide a valid phone number"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const contacts = mongoose.model("Contact", contactSchema);
module.exports = contacts;
