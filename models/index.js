const dbConfig = require('../config/db.config');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.heroku_56vg5r9k = require('./journal')(mongoose);

module.exports = db;
