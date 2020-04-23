'use strict';

const model = require('./reservation.model');

async function saveReservation(req, res) {
  try {
    let reservation = await model.save(req.body);
    return res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json(error);
  }
  res.status(200);
}

async function getReservations(req, res) {
  try {
    let reservation = await model.getAll();
    return res.status(200).json(reservation);
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function getReservationById(req, res) {
  try {
    let reservation = await model.getById(req.params.id);
    return res.status(200).json(reservation);

  } catch (error) {
    return res.status(500).json(error);
  }
}

async function getReservationByUser(req, res) {
  try {
    let reservation = await model.getByUser(req.params.id);
    return res.status(200).json(reservation);

  } catch (error) {
    return res.status(500).json(error);
  }
}

async function putReservation(req, res) {
  try {
    let reservation = await model.put(req.params.id, req.body);
    if (reservation.n === 0)
      return res.status(500).json('Error');
    return res.status(200).json(await model.getById(req.params.id));
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function deleteReservation(req, res) {
  try {
    let reservation = await model.remove(req.params.id);
    return res.status(200).json(reservation);
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = {
  getReservations,
  getReservationById,
  getReservationByUser,
  saveReservation,
  putReservation,
  deleteReservation
};
