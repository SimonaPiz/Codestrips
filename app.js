const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './db.sqlite');
const { isValidStrip } = require('./utils');

module.exports = app;

const PORT = process.env.PORT || 4001;

app.use(bodyParser.json());

app.use(express.static('public'));

// GET '/strips'
app.get('/strips', (req, res, next) => {
  db.all(`SELECT * FROM Strip;`, (err, rows) => {
    res.send({ strips: rows });
  });  
});

// POST '/strips' to create Strip
app.post('/strips', (req, res, next) => {
  const newStrip = req.body.strip;
  
  if (isValidStrip(newStrip)) {
     
  } else {
    res.status(400).send();
  } 
});

app.listen(PORT, ()=>{
  console.log('Server is listening at port ' + PORT);
});
