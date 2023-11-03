const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './db.sqlite');
const { isValidStrip } = require('./utils');

module.exports = app;

const PORT = process.env.PORT || 4001;

app.use(bodyParser.json());
app.use(morgan('dev'));

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
  if (!newStrip.bubbleText || newStrip.bubbleText.toLowerCase() == 'null') {
    res.status(500).send();
    return;
  }
  if (!newStrip.caption || newStrip.caption.toLowerCase() == 'null') {
    res.status(500).send();
    return;
  }

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
        db.get(
          `SELECT * FROM Strip 
          WHERE id = ?;`, 
          [this.lastID],
          (err, row) => {
            if (err != null) {
              res.status(500).send(err);
              return;
            }
            //console.log(row);
            res.status(201).send({strip: row});
          }
        );
    });
  } else {
    res.status(400).send();
  } 
});

app.listen(PORT, ()=>{
  console.log('Server is listening at port ' + PORT);
});
