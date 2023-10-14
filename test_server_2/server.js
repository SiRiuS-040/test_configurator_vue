const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const cors            = require('cors');
const app            = express();
const port = 3000;

require('./app/routes')(app, {});
app.use(cors());

app.listen(port, () => {
  console.log('We are live on http://localhost:' + port);
});