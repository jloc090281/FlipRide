const express = require('express');
const vinAPI = require('../api/vin');
const router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  try {
    vinAPI.getVinById(id).then(resp => {
      res.json(resp);
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
