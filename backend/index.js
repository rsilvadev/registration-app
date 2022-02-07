const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');

const countriesRoute = require('./routes/countries');

app.use(cors({
  origin: '*'
}));

app.use('/countries', countriesRoute);

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connected to the DB'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('/');
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server running on port ${process.env.SERVER_PORT}`);
});