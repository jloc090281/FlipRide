const fetch = require('node-fetch');

function getVinById(vin) {
  return new Promise((resolve, reject) => {
    fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`, {
      method: 'GET',
      compress: true
    })
    .then(res => res.json())
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject(err);
    })
  });
};

module.exports = { getVinById };