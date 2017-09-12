'use strict';

const express           = require('express'),
      passport          = require('passport'),
      FacebookStrategy  = require('passport-facebook').Strategy,
      GoogleStrategy    = require('passport-google-oauth').OAuth2Strategy,
      config            = require('../config');

// Saves the user to req.session.passport
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserializes the user for the session
passport.deserializeUser((user, done) => {
  done(null, user);
});

/**
 * Facebook strategy
 * Pops up the facebook page to login where the user is shown all requests
 */

passport.use(new FacebookStrategy({
  clientID: config.facebook.appId,
  clientSecret: config.facebook.appSecret,
  callbackURL: config.facebook.callbackUrl,
  profileFields: ['id', 'photos', 'email', 'gender', 'link', 'locale', 'name', 'timezone', 'updated_time', 'verified']
}, (accessToken, refreshToken, profile, done) => {
    // Map for the required response
    profile = payload(profile);
    return done(null, profile);
  })
);

/**
 * Google Strategy
 */

passport.use(new GoogleStrategy({
  clientID: config.google.appId,
  clientSecret: config.google.appSecret,
  callbackURL: config.google.callbackUrl
},
  function(accessToken, refreshToken, profile, done) {
    profile = payload(profile);
    return done(null, profile);
  }
));

var payload = function(profile) {
  return {
    id: profile.id,
    first_name: profile.name.givenName,
    last_name: profile.name.familyName,
    email: profile.emails[0].value,
    url: profile.photos[0].value,
    source: profile.provider
  }
}

module.exports = passport;


