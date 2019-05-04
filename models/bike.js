const fs = require('fs');
const path = require('path');

const pathToDbFile = path.join(path.dirname(process.mainModule.filename), 'database', 'db.json');

const getAllBikes = cb => {
  fs.readFile(pathToDbFile, (err, data) => {
    if (err) {
      return cb([]);
    }
    cb(JSON.parse(data));
  });
}

module.exports = class Bike {
  constructor(bikeName, bikePrice, bikeDescription, bikeUrl) {
    this.bikeName = bikeName;
    this.bikePrice = bikePrice;
    this.bikeDescription = bikeDescription;
    this.bikeUrl = bikeUrl;
  }

  save() {
    this.bikeId = Math.floor(Math.random() * 10000);
    getAllBikes(bikes => {
      bikes.push(this);

      fs.writeFile(pathToDbFile, JSON.stringify(bikes), err => {
        if (err) return console.log(err);

        console.log('bike added to db');
      });
    });
  }

  static fetchAll(cb) {
    getAllBikes(cb);
  }

  static findById(id, cb) {
    getAllBikes(bikes => {
      const bike = bikes.find(bike => bike.bikeId === id);
      cb(bike);
    });
  }
}