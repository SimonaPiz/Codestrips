const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './db.sqlite');

module.exports = app;

const PORT = process.env.PORT || 4001;

app.use(bodyParser.json());

app.use(express.static('public'));

app.listen(PORT, ()=>{
  console.log('Server is listening at port ' + PORT);
});
