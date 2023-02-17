const prisma = require('../db.js');

// Get all bikes
const getAllBikes = async (req, res) => {
  const bikes = await prisma.bike.findMany();
  res.json(bikes);
};

// Get bike by id
const getOneBikes = async (req, res) => {
  const { id } = req.params;
  const bike = await prisma.bike.findUnique({
    where: { id: Number(id) },
  });
  if (bike) {
    res.json(bike);
  } else {
    res.status(404).json({ error: 'Bike not found' });
  }
};

// Create bike
const createBike = async (req, res) => {
  const { bikeCode, status, locationId } = req.body;
  const bike = await prisma.bike.create({
    data: {
      bikeCode,
      status,
      location: { connect: { id: locationId } },
    },
  });
  res.json(bike);
};

// Update bike
const updateBike = async (req, res) => {
  const { id } = req.params;
  const { bikeCode, status, locationId } = req.body;
  const bike = await prisma.bike.update({
    where: { id: Number(id) },
    data: {
      bikeCode,
      status,
      location: { connect: { id: locationId } },
    },
  });
  res.json(bike);
};

// Delete bike
const deleteBikes = async (req, res) => {
  const { id } = req.params;
  await prisma.bike.delete({
    where: { id: Number(id) },
  });
  res.json({ message: 'Bike deleted' });
};

module.exports = {getAllBikes,getOneBikes,createBike,updateBike,deleteBikes}
