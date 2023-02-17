const prisma = require('../db.js');

// Get all locations
const getAllLocations = async (req, res) => {
  const locations = await prisma.location.findMany({
    include: { bikes: true },
  });
  res.json(locations);
};

// Get location by id
const getOneLocations = async (req, res) => {
  const { id } = req.params;
  const location = await prisma.location.findUnique({
    where: { id: Number(id) },
    include: { bikes: true },
  });
  if (location) {
    res.json(location);
  } else {
    res.status(404).json({ error: 'Location not found' });
  }
};

// Create location
const createLocation = async (req, res) => {
  const { name, address } = req.body;
  const location = await prisma.location.create({
    data: { name, address },
  });
  res.json(location);
};

// Update location
const updateLocation = async (req, res) => {
  const { id } = req.params;
  const { name, address } = req.body;
  const location = await prisma.location.update({
    where: { id: Number(id) },
    data: { name, address },
  });
  res.json(location);
};

// Delete location
const deleteLocation = async (req, res) => {
  const { id } = req.params;
  await prisma.location.delete({
    where: { id: Number(id) },
  });
  res.json({ message: 'Location deleted' });
};

module.exports = {getAllLocations,getOneLocations,createLocation,updateLocation,deleteLocation}