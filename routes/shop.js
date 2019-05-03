const express = require('express');
const router = express.Router();

const bikesController = require('../controllers/bikes-controller');

router.get('/', bikesController.renderBikes);

module.exports = router;