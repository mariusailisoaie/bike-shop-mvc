const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin-controller');

router.get('/add-bike', adminController.getAddBikePage);
router.get('/bikes', adminController.getAdminProductsPage);
router.post('/post-bike', adminController.postBike);

module.exports = router;