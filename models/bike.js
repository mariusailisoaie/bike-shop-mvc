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

module.exports = class Bike {
  constructor(bikeName, bikePrice, bikeDescription, bikeUrl) {
    this.bikeName = bikeName;
    this.bikePrice = bikePrice;
    this.bikeDescription = bikeDescription;
    this.bikeUrl = bikeUrl;
  }

  save() {
    bikes.push(this);
  }

  static fetchAll() {
    return bikes;
  }
}