const express = require('express');
const router = express.Router();

const bikesController = require('../controllers/bikes-controller');
const homeController = require('../controllers/home-controller');

router.get('/', homeController.renderHomePage);
router.get('/bikes', bikesController.renderBikes);

module.exports = router;