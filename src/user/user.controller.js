'use strict';

const model = require('./user.model');

async function saveUser(req, res) {
  try {
    let user = await model.save(req.body);
    console.log('***ok *** user', user);
    return res.status(200).json(user);
  } catch (error) {
    console.log('**********', error);
    res.status(500).json(error);
  }
  res.status(200);
}

async function getUsers(req, res) {
  try {
    let user = await model.getAll();
    console.log('***get ok', user);
    return res.status(200).json(user);
  } catch (error) {
    console.log('***get err', error);
    return res.status(500).json(error);
  }
}

module.exports = {
  getUsers,
  saveUser
};
