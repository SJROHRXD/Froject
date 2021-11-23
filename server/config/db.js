const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/zapplicant', {
  useNewUrlParser: true
});

module.exports = mongoose.connection;
