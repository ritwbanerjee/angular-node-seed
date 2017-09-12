'use strict';

var webpack;

if(process.env.ENV === 'production') {
  webpack = require('./config/webpack.prod.js');
} else {
  webpack = require('./config/webpack.dev.js');
}

module.exports = webpack;