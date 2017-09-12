/**
 * Serves index.html from dist if no routes intercepts
 * Redirects the URL hunt to angular
 * If no routes intercept in angular as well, we shall redirect to the 404 page in angular
 */

'use strict';

const  path    = require('path');

module.exports = function(app) {
  app.get('*', (req, res) => {
    res.sendfile(path.resolve(__dirname + '/../../dist/index.html'));
  });
}