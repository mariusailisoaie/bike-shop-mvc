const bikes = [
  {
    bikeName: 'Mountain Bike',
    bikePrice: '$ 500',
    bikeDescription: 'This is a very nice bike for climbing mountains.',
    bikeUrl: 'https://images.pexels.com/photos/462036/pexels-photo-462036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=680&w=480',
  },
  {
    bikeName: 'BMX',
    bikePrice: '300 EUR',
    bikeDescription: 'Bike for tricks in the park.',
    bikeUrl: 'https://images.pexels.com/photos/1580234/pexels-photo-1580234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=640&w=480',
  },
  {
    bikeName: 'City Bike',
    bikePrice: '400 EUR',
    bikeDescription: 'Ideal for city rides.',
    bikeUrl: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=640&w=480',
  }
];

exports.getAddBikePage = (req, res, next) => {
  res.render('admin', { pageTitle: 'Add Product' });
}

exports.postBike = (req, res, next) => {
  bikes.push({
    bikeName: req.body.bikeName,
    bikePrice: req.body.bikePrice,
    bikeDescription: req.body.bikeDescription,
    bikeUrl: req.body.bikeUrl
  });

  res.redirect('/');
}

exports.renderBikes = (req, res, next) => {
  console.log(bikes);
  res.render('shop', { pageTitle: 'Shop', bikes: bikes });
}