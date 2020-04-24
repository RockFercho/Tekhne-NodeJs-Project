const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
  name: String,
  lastname: String,
  moderslastname: String,
  birthdate: { type: Date, default: Date.now },
  sex: String,
  address: String,
  celphone: String,
  email: String
});

module.exports = {
  userSchema
};
