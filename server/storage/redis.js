'use strict';
const redis         = require('redis'),
      session       = require('express-session'),      
      redisStore    = require('connect-redis')(session),
      redisClient   = redis.createClient(),
      uuid          = require('uuid'),  
      cookieParser  = require('cookie-parser'),
      config        = require('../config');

module.exports = redisClient;

module.exports = function(app) {

  const sessionStore = new redisStore({ 
    host: config.redis.ip,
    port: config.redis.port,
    client: redisClient,
    ttl :  3600000
  });

  redisClient.on('error', (err)=> {
    console.log('could not connect ', err);
  });

  // Checks for Redis Connection
  redisClient.on('connect', ()=> {
    console.log('++++++++++++++++++++');
    console.log('Redis connected');
    console.log('++++++++++++++++++++');
  });

  return {
    set: function(key, value) {
      redisClient.set(key, value);
    },

    get: function(key) {
      
      return new Promise((resolve, reject) => {
        redisClient.get(key, (err, response) => {
          if(err) {
            reject(err);
          } else {
            resolve(JSON.parse(response));
          }
        })
      })
      
    },

    sessionStore
  }
}