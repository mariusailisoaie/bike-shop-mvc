const Bike = require('../models/bike');

exports.getAddBikePage = (req, res, next) => {
  res.render('admin/add-bike', { pageTitle: 'Add Product', path: '/admin/add-bike' });
}

exports.postBike = (req, res, next) => {
  const { bikeName, bikePrice, bikeDescription, bikeUrl } = req.body;
  const bike = new Bike(bikeName, bikePrice, bikeDescription, bikeUrl);
  bike.save();

  res.redirect('/');
}

exports.getAdminProductsPage = (req, res, next) => {
  Bike.fetchAll(bikes => {
    res.render('admin/bikes', { pageTitle: 'Admin Products', path: '/admin/bikes', bikes });
  });
}