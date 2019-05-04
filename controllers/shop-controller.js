const Bike = require('../models/bike');

exports.renderHomePage = (req, res, next) => {
  res.render('shop/index', { pageTitle: 'Home Page', path: '/' });
}

exports.renderBikes = (req, res, next) => {
  Bike.fetchAll(bikes => {
    res.render('shop/bikes-list', { pageTitle: 'Bikes', path: '/bikes', bikes });
  });
}

exports.renderCart = (req, res, next) => {
  res.render('shop/cart', { pageTitle: 'Cart', path: '/cart' });
}