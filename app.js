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
    db.run(
      `INSERT INTO Strip (head, body, background, bubble_type, bubble_text, caption)
      VALUES(
        '${newStrip.head}', 
        '${newStrip.body}', 
        '${newStrip.background}', 
        '${newStrip.bubbleType}',
        '${newStrip.bubbleText}',
        '${newStrip.caption}'
      );`, 
      function(err) {
        if (err != null) {
          res.status(500).send(err);
          return;
        }
        
      }
    );
  } else {
    res.status(400).send();
  } 
});

app.listen(PORT, ()=>{
  console.log('Server is listening at port ' + PORT);
});
