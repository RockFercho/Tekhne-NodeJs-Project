'use strict';

const mongoose = require('mongoose');
const schema = require('./user.schema');

const DOCUMENT = 'user';

let user = mongoose.model(DOCUMENT, schema.userSchema);

function save(data) {
  return user.create(data);
}

async function getAll() {
  const users = await user.find({});
  const userArray = [];
  users.forEach(data => {
    userArray.push(data);
  });
  return userArray;
}

module.exports = {
  save,
  getAll
};
