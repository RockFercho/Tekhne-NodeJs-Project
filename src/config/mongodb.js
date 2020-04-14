const mongoose = require('mongoose');

function connect() {
  //mongoose.connect('mongodb://username:password@host:port/database?options...', {useNewUrlParser: true});
  mongoose.connect('mongodb://localhost:27017/mysystem', { useUnifiedTopology: true, useNewUrlParser: true });
  console.log('Data base connected ...');
}

module.exports = {
  connect
};
