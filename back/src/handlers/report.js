const prisma = require('../db.js');

// Get all lost and damage reports
const getAllReports = async (req, res) => {
  const reports = await prisma.lostAndDamageReport.findMany({
    include: { user: true, bike: true },
  });
  res.json(reports);
};

// Get report by id
const getOneReport =  async (req, res) => {
  const { id } = req.params;
  const report = await prisma.lostAndDamageReport.findUnique({
    where: { id: Number(id) },
    include: { user: true, bike: true },
  });
  if (report) {
    res.json(report);
  } else {
    res.status(404).json({ error: 'Report not found' });
  }
};

// Create report
const createReport =  async (req, res) => {
  const { userId, bikeId, status, details } = req.body;
  const report = await prisma.lostAndDamageReport.create({
    data: { userId, bikeId, status, details },
    include: { user: true, bike: true },
  });
  res.json(report);
};

// Update report
const updateReport =  async (req, res) => {
  const { id } = req.params;
  const { userId, bikeId, status, details } = req.body;
  const report = await prisma.lostAndDamageReport.update({
    where: { id: Number(id) },
    data: { userId, bikeId, status, details },
    include: { user: true, bike: true },
  });
  res.json(report);
};

// Delete report
const deleteReports =  async (req, res) => {
  const { id } = req.params;
  await prisma.lostAndDamageReport.delete({
    where: { id: Number(id) },
  });
  res.json({ message: 'Report deleted' });
};

module.exports = {getAllReports,getOneReport,createReport,updateReport,deleteReports}