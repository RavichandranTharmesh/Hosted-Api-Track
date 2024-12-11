const express = require('express');
const router = express.Router();

const reserveController = require('../controllers/reserve');

router.post('/addreserve', reserveController.postReserve);
router.get('/getreserve', reserveController.getReserve);


module.exports = router;