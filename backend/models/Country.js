const mongoose = require('mongoose');

const CountrySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('Countries', CountrySchema);