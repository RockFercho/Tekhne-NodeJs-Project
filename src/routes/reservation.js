'use strict';

let express = require('express');
let reservationController = require('../reservation/reservation.controller');

let router = express.Router();

router
  .get('/', reservationController.getReservations)
  .get('/:id', reservationController.getReservationById)
  .post('/', reservationController.saveReservation)
  //.put('/:id', reservationController.putReservation);
  .delete('/:id', reservationController.deleteReservation);

router
  .get('/user/:id', reservationController.getReservationByUser);

module.exports = router;
