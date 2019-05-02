const fs = require('fs');
const path = require('path');

module.exports = class Bike {
  constructor(bikeName, bikePrice, bikeDescription, bikeUrl) {
    this.bikeName = bikeName;
    this.bikePrice = bikePrice;
    this.bikeDescription = bikeDescription;
    this.bikeUrl = bikeUrl;
  }

  save() {
    const pathToDbFile = path.join(path.dirname(process.mainModule.filename), 'database', 'db.json');

    fs.readFile(pathToDbFile, (err, data) => {
      let bikes = [];
      if (!err) {
        bikes = JSON.parse(data);
      }

      bikes.push(this);

      fs.writeFile(pathToDbFile, JSON.stringify(bikes), err => {
        if (err) return console.log(err);

        console.log('bike added to db');
      });
    });
  }

  static fetchAll(cb) {
    const pathToDbFile = path.join(path.dirname(process.mainModule.filename), 'database', 'db.json');

    fs.readFile(pathToDbFile, (err, data) => {
      if (err) {
        return cb([]);
      }
      cb(JSON.parse(data));
    });
  }
}