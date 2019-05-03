const express = require('express');
const router = express.Router();

const bikesController = require('../controllers/bikes-controller');

router.get('/add-bike', bikesController.getAddBikePage);

router.post('/post-bike', bikesController.postBike);

module.exports = router;