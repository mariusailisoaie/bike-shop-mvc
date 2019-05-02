const Bike = require('../models/bike');

exports.getAddBikePage = (req, res, next) => {
  res.render('admin', { pageTitle: 'Add Product' });
}

exports.postBike = (req, res, next) => {
  const { bikeName, bikePrice, bikeDescription, bikeUrl } = req.body;
  const bike = new Bike(bikeName, bikePrice, bikeDescription, bikeUrl);
  bike.save();

  res.redirect('/');
}

exports.renderBikes = (req, res, next) => {
  Bike.fetchAll(bikes => {
    res.render('shop', { pageTitle: 'Shop', bikes });
  });
}