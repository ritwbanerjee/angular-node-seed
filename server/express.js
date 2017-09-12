'use strict';

const express   =   require('express'),
      passport  =   require('passport'),
      path      =   require('path'),
      cors      =   require('cors');

module.exports = function(app) {

  // Set the path for dist and public
  app.use('/', express.static(path.normalize(__dirname + '/../public')));
  app.use('/', express.static(path.normalize(__dirname + '/../dist')));

  // Set the reference of redis globally for us to be able to use this later
  const redis          =   require('./storage/redis.js')(app),
        bodyParser     =   require('body-parser'),
        cookieParser   =   require('cookie-parser'),
        methodOverride =   require('method-override');

  app.set('redis', redis);
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(methodOverride('X-HTTP-Method-Override'));
  app.use(cookieParser());
  // session ================================================
  require('./middleware/sessionConfig.js')(app);
  app.use(passport.initialize());
  app.use(passport.session());

  // routes ==================================================
  require('./routes/api')(app);
}