const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shop-controller');

router.get('/', shopController.renderHomePage);
router.get('/bikes', shopController.renderBikes);
router.get('/cart', shopController.renderCart);

module.exports = router;