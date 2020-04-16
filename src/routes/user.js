'use strict';

let express = require('express');
let userController = require('../user/user.controller');

let router = express.Router();

router
  .get('/', userController.getUsers)
  .get('/:id', userController.getById)
  .post('/', userController.saveUser)
  .delete('/:id', userController.deleteUser)
  .put('/:id', userController.putUser);

module.exports = router;
