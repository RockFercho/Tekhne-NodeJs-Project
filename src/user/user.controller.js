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

async function getById(req, res) {
  try {
    let user = await model.getById(req.params.id);
    console.log('****---- get by id', user);
    return res.status(200).json(user);

  } catch (error) {
    return res.status(500).json(error);
  }
}

async function putUser(req, res) {
  try {
    console.log('****---- put1', req.params.id);
    console.log('****---- put2', req.body);
    let user = await model.put(req.params.id, req.body);
    console.log('****---- put3', user);
    if (user.n === 0)
      return res.status(500).json('Error');
    return res.status(200).json(await model.getById(req.params.id));
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function deleteUser(req, res) {
  try {
    let user = await model.remove(req.params.id);
    console.log('****---- delete', user);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = {
  getUsers,
  getById,
  saveUser,
  putUser,
  deleteUser
};
