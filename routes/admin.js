const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products');

router.get('/add-product', productsController.getAddBikePage);

router.post('/post-bike', productsController.postBike);

module.exports = router;