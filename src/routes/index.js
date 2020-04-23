'use strict';

const user = require('./user');
const reservation = require('./reservation');

function routes(app) {
  app.use('/api/user', user);
  app.use('/api/reservation', reservation);
}

module.exports = routes;
