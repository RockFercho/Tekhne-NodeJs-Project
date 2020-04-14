'use strict';

let express = require('express');
let userController = require('../user/user.controller');

let router = express.Router();

router
  .get('/', userController.getUsers)
  .post('/', userController.saveUser);

module.exports = router;
