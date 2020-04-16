'use strict';

const userDB = require('./user.db');

function save(data) {
  return userDB.save(data);
}

function getAll() {
  return userDB.getAll();
}

function getById(id) {
  return userDB.getById(id);
}

function put(id, data) {
  return userDB.put(id, data);
}

function remove(id) {
  return userDB.remove(id);
}

module.exports = {
  save,
  getAll,
  getById,
  put,
  remove
};
