'use strict';
const redis         = require('redis'),
      session       = require('express-session'),      
      redisStore    = require('connect-redis')(session),
      redisClient   = redis.createClient(),
      uuid          = require('uuid'),  
      cookieParser  = require('cookie-parser');

module.exports = function(app) {

  const sessionStore = new redisStore({ 
    host: '127.0.0.1',
    port: 6379,
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
    set: function(obj) {
      redisClient.set(obj.id, obj.token);
    },

    get: function(key) {
      try {
        return redisClient.get(key);
      } catch(err) {
        return 'Key not found';
      }
    },

    sessionStore
  }
}