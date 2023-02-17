const express = require('express');
const router = express.Router();
const {getAllBikes,getOneBikes,createBike,updateBike,deleteBikes} = require('./handlers/bike')
const {getAllLocations,getOneLocations,createLocation,updateLocation,deleteLocation} = require('./handlers/location')
const {getAllReturns,getOneReturn,createReturn,deleteReturn} = require('./handlers/return')
const {getAllReports,getOneReport,createReport,updateReport,deleteReports} = require('./handlers/report')
const {getAllReservations,getOneReservation,createReservation,updateReservation,deleteReservation} = require('./handlers/reservation')

router.get("/bike", getAllBikes);
router.get("/bike/:id", getOneBikes);
router.post("/bike", createBike);
router.put("/bike/:id", updateBike);
router.delete("/bike/:id", deleteBikes);

router.get("/reservation", getAllReservations);
router.get("/reservation/:id", getOneReservation);
router.post("/reservation", createReservation);
router.put("/reservation/:id", updateReservation);
router.delete("/reservation/:id", deleteReservation);

router.get("/return", getAllReturns);
router.get("/return/:id", getOneReturn);
router.post("/return", createReturn);
router.delete("/return/:id", deleteReturn);

router.get("/report", getAllReports);
router.get("/report/:id", getOneReport);
router.post("/report", createReport);
router.put("/report/:id", updateReport);
router.delete("/report/:id", deleteReports);

router.get("/location", getAllLocations);
router.get("/location/:id", getOneLocations);
router.post("/location", createLocation);
router.put("/location/:id", updateLocation);
router.delete("/location/:id", deleteLocation);


module.exports = router;