'use strict';

const passport = require('../../auth/passport');
const _        = require('lodash');

module.exports = function(app) {

  /**
   * Facebook Auth strategy
   */

  app.get('/auth/facebook', passport.authenticate('facebook', {
    scope: ['email']
  }), (req, res) => {
  });

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { 
      successRedirect: '/success',
      failureRedirect: '/failure',
      scope:['email']
    })
  );

  /**
   * Google Auth strategy
   */
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

  app.get('/auth/google/callback',
    passport.authenticate('google', { 
      successRedirect: '/success',
      failureRedirect: '/failure',
      scope:['profile', 'email']
    }));

  /**
   * Redirects from google and facebook
   */

  app.get('/success', (req, res) => {
    // Do what you want with the data here
    res.send(req.session);
  });

  app.get('/failure', (req, res) => {
    res.send('Social called failed. Check the IDs used');
  });

  // Logout handler

  app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
  });
}