const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let reservationSchema = new Schema({
  start: { type: Date, default: Date.now },
  end: { type: Date, default: Date.now },
  notes: String,
  user: { type: Schema.Types.ObjectId, ref: 'user' }
});

module.exports = {
  reservationSchema
};
