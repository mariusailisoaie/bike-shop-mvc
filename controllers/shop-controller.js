const Bike = require('../models/bike');

exports.renderHomePage = (req, res, next) => {
  res.render('shop/index', { pageTitle: 'Home Page', path: '/' });
}

exports.renderBikes = (req, res, next) => {
  Bike.fetchAll(bikes => {
    res.render('shop/bikes-list', { pageTitle: 'Bikes', path: '/bikes', bikes });
  });
}

exports.renderBikeDetails = (req, res, next) => {
  const bikeId = req.params.bikeId;
  Bike.findById(parseInt(bikeId), bike => {
    res.render('shop/bike-details', { pageTitle: 'Bike Details', path: '/bike', bike })
  });
}

exports.postCart = (req, res, next) => {
  const bikeId = req.body.bikeId;
  Bike.findById(parseInt(bikeId), bike => {
    res.render('shop/cart', { pageTitle: 'Cart', path: '/cart', bike })
  });
}

exports.renderCart = (req, res, next) => {
  res.render('shop/cart', { pageTitle: 'Cart', path: '/cart' });
}