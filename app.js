const express = require('express');
const app = express();
const bodyParser = require('body-parser');

module.exports = app;

const PORT = process.env.PORT || 4001;

app.use(bodyParser.json());

app.use(express.static('public'));

app.listen(PORT, ()=>{
  console.log('Server is listening at port ' + PORT);
});
