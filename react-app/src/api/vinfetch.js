const fetch = require('node-fetch');

function getVinById(vin) {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:4000/vinfetch/${vin}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject(err.message);
    })
  });
};

module.exports = { getVinById };