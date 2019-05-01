const bikes = [];

exports.getAddBikePage = (req, res, next) => {
  res.render('admin', { pageTitle: 'Add Product' });
}

exports.postBike = (req, res, next) => {
  bikes.push({
    bikeName: req.body.bikeName,
    bikePrice: req.body.bikePrice,
    bikeDescription: req.body.bikeDescription,
  });

  res.redirect('/');
}

exports.renderBikes = (req, res, next) => {
  console.log(bikes);
  res.render('shop', { pageTitle: 'Shop', bikes: bikes });
}