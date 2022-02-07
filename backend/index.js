const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.SERVER_PORT;
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});