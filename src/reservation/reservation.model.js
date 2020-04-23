'use strict';

const reservationDB = require('./reservation.db');

function save(data) {
  return reservationDB.save(data);
}

function getAll() {
  return reservationDB.getAll();
}

function getById(id) {
  return reservationDB.getById(id);
}

function getByUser(user) {
  return reservationDB.getByUser(user);
}

function put(id, data) {
  return reservationDB.put(id, data);
}

function remove(id) {
  return reservationDB.remove(id);
}

module.exports = {
  save,
  getAll,
  getById,
  getByUser,
  put,
  remove
};
