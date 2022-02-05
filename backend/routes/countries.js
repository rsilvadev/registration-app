const express = require('express');
const router = express.Router();
const Country = require('../models/Country');
require('dotenv/config');

// get all countries
router.get('/', async (req, res) => {
  try {
    res.json(await Country.find());
  } catch(err) {
    res.json({ message: err });
  }
});

// add a country
router.post('/', async (req, res) => {
  try {
    const { name, token } = req.query;

    if(!token || token !== process.env.ACCESS_TOKEN) {
      throw 'Invalid or missing token';
    }

    if(!name) {
      throw 'Country name missing';
    }

    const country = new Country({
      name
    });

    res.json(await country.save());
  } catch(err) {
    res.json({ message: err });
  }
});

// update a country by id
router.post('/:countryId', async (req, res) => {
  try {
    const { name, token } = req.query;

    if(!token || token !== process.env.ACCESS_TOKEN) {
      throw 'Invalid or missing token';
    }

    if(!name) {
      throw 'Country name missing';
    }

    res.json(await Country.findByIdAndUpdate(req.params.countryId, {name}, {new: true}));
  } catch(err) {
    res.json({ message: err });
  }
});

// delete a country by id
router.delete('/:countryId', async (req, res) => {
  try {
    const { token } = req.query;

    if(!token || token !== process.env.ACCESS_TOKEN) {
      throw 'Invalid or missing token';
    }

    res.json(await Country.deleteOne({ _id: req.params.countryId }));
  } catch(err) {
    res.json({ message: err });
  }
});

module.exports = router;