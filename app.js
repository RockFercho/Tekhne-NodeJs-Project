const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./src/config/mongodb');

db.connect();

const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8082;

require('./src/routes')(app);

app.listen(port);
console.log(`Magic happens on port ${port}`);
