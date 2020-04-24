'use strict';

const model = require('./user.model');

async function saveUser(req, res) {
  try {
    let user = await model.save(req.body);
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
  res.status(200);
}

async function getUsers(req, res) {
  try {
    let user = await model.getAll();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function getById(req, res) {
  try {
    let user = await model.getById(req.params.id);
    return res.status(200).json(user);

  } catch (error) {
    return res.status(500).json(error);
  }
}

async function putUser(req, res) {
  try {
    let user = await model.put(req.params.id, req.body);
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
