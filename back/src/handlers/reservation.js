const prisma = require('../db.js');

// Get all reservations
const getAllReservations = async (req, res) => {
  const reservations = await prisma.reservation.findMany({
    include: { user: true, bike: true },
  });
  res.json(reservations);
};

// Get reservation by id
const getOneReservation = async (req, res) => {
  const { id } = req.params;
  const reservation = await prisma.reservation.findUnique({
    where: { id: Number(id) },
    include: { user: true, bike: true },
  });
  if (reservation) {
    res.json(reservation);
  } else {
    res.status(404).json({ error: 'Reservation not found' });
  }
};

// Create reservation
const createReservation =  async (req, res) => {
  const { userId, bikeId, status, locationId } = req.body;
  const reservation = await prisma.reservation.create({
    data: { userId, bikeId, status, locationId },
    include: { user: true, bike: true },
  });
  res.json(reservation);
};

// Update reservation
const updateReservation =  async (req, res) => {
  const { id } = req.params;
  const { userId, bikeId, status, locationId } = req.body;
  const reservation = await prisma.reservation.update({
    where: { id: Number(id) },
    data: { userId, bikeId, status, locationId },
    include: { user: true, bike: true },
  });
  res.json(reservation);
};

// Delete reservation
const deleteReservation =  async (req, res) => {
  const { id } = req.params;
  await prisma.reservation.delete({
    where: { id: Number(id) },
  });
  res.json({ message: 'Reservation deleted' });
};

module.exports = {getAllReservations,getOneReservation,createReservation,updateReservation,deleteReservation}
