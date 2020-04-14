'use strict';

const userDB = require('./user.db');

function save(data) {
  return userDB.save(data);
}

function getAll() {
  return userDB.getAll();
}

module.exports = {
  save,
  getAll
};
