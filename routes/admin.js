const express = require('express');
const router = express.Router();

const bikesController = require('../controllers/bikes-controller');

router.get('/add-product', bikesController.getAddBikePage);

router.post('/post-bike', bikesController.postBike);

module.exports = router;