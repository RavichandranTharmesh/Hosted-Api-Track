const express = require('express');
const storage = require('../helpers/storage');
const router = express.Router();

const locationController = require('../controllers/location');

router.get('/findReserveBus/:id', locationController.findBus);
router.put('/updateLocation/:id', storage, locationController.updateLocation);

module.exports = router;