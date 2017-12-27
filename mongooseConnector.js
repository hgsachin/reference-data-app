const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:admin@ds133017.mlab.com:33017/reference_data');

module.exports = {mongoose};