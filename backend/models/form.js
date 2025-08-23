const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  type: String,
  name: String,
  email: String,
  phone: String,
  company: String,
  message: String,
  extra: Object
}, { timestamps: true });

module.exports = mongoose.model('Form', formSchema);
