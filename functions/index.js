const functions = require('firebase-functions');
const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 4200;

app.use(cors());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/dist/index.html`));
});

app.get('/the-dog-api', (req, res, done) => {
  return axios.get('https://api.thedogapi.co.uk/v2/dog.php?limit=13/')
    .then((response) => {
      res.json(response.data);
      done();
    })
    .catch(error => {
      console.log(error);
      done();
    });
});

app.get('/woof-api', (req, res, done) => {
  return axios.get('https://random.dog/woof.json')
    .then(({ data }) => {
      res.json(data);
      done();
    })
    .catch(error => {
      console.log(error);
      done();
    });
});

exports.app = functions.https.onRequest(app);
