'use strict';
const path  = require('path');

module.exports = function(app) {

  // Require All other Express routes here
  require('./login/login')(app);

  // Load this last to load angular when everything bypasses
  require('./loadAngular')(app);

}
