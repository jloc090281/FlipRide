const express = require('express');
const healthcheck  = require('./routes/healthcheck');
const vin = require('./routes/vin');
const app = express();
app.use('/healthcheck', healthcheck);
app.use('/vinfetch', vin);
app.listen(4000, () => {
 console.log("Server running on port 4000");
});
