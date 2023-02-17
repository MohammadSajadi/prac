const prisma = require('../db.js');

// Get all returns
const getAllReturns = async (req, res) => {
  const returns = await prisma.return.findMany({
    include: { user: true, bike: true },
  });
  res.json(returns);
};

// Get return by id
const getOneReturn = async (req, res) => {
  const { id } = req.params;
  const returnObj = await prisma.return.findUnique({
    where: { id: Number(id) },
    include: { user: true, bike: true },
  });
  if (returnObj) {
    res.json(returnObj);
  } else {
    res.status(404).json({ error: 'Return not found' });
  }
};

// Create return
const createReturn = async (req, res) => {
  const { userId, bikeId, locationId, returnedAt } = req.body;
  const returnObj = await prisma.return.create({
    data: { userId, bikeId, locationId, returnedAt },
    include: { user: true, bike: true },
  });
  res.json(returnObj);
};

// Delete return
const deleteReturn = async (req, res) => {
  const { id } = req.params;
  await prisma.return.delete({
    where: { id: Number(id) },
  });
  res.json({ message: 'Return deleted' });
};

module.exports = {getAllReturns,getOneReturn,createReturn,deleteReturn}