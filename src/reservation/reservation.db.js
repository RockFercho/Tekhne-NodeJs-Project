'use strict';

const mongoose = require('mongoose');
const schema = require('./reservation.schema');

const DOCUMENT = 'reservation';

let reservation = mongoose.model(DOCUMENT, schema.reservationSchema);

function save(data) {
  return reservation.create(data);
}

async function getAll() {
  return reservation.find({}).populate('user');
}

function getById(id) {
  return reservation.findById(id).populate('user');
}

function getByUser(user) {
  return reservation.find({ user });
}

function put(id, data) {
  //return user.replaceOne({ _id: id }, data);
}

function remove(id) {
  return reservation.findOneAndDelete({_id: id });
}
module.exports = {
  save,
  getAll,
  getById,
  getByUser,
  put,
  remove
};
