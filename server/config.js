/**
 * Environment Config file
 * Replace the client ID and the client secrets by your own Client ID and Client Secret for google and fb
 */


'use strict';

const envConfig = {
  dev: {
    facebook: {
      appId: '195846867622505',
      appSecret: '6ceab72d7a9135d9597f5fdf0274eaef',
      callbackUrl: 'http://localhost:3000/auth/facebook/callback'
    },
    google: {
      appId: '97331181575-9v6bpffk6is2er0jia30a9e4f8027coo.apps.googleusercontent.com',
      appSecret: 'Hn7prVeGYVyQgJTwSb6kBTku',
      callbackUrl: 'http://localhost:3000/auth/google/callback'
    },
    redis: {
      ip: '127.0.0.1',
      port: 6379
    }
  }, 

  uat: {
    facebook: {
      appId: '195846867622505',
      appSecret: '6ceab72d7a9135d9597f5fdf0274eaef',
      callbackUrl: 'http://localhost:3000/auth/facebook/callback'
    },
    google: {
      appId: '97331181575-9v6bpffk6is2er0jia30a9e4f8027coo.apps.googleusercontent.com',
      appSecret: 'Hn7prVeGYVyQgJTwSb6kBTku',
      callbackUrl: 'http://localhost:3000/auth/google/callback'
    },
    redis: {
      ip: '127.0.0.1',
      port: 6379
    }
  },

  prod: {
    facebook: {
      appId: '195846867622505',
      appSecret: '6ceab72d7a9135d9597f5fdf0274eaef',
      callbackUrl: 'http://localhost:3000/auth/facebook/callback'
    },
    google: {
      appId: '97331181575-9v6bpffk6is2er0jia30a9e4f8027coo.apps.googleusercontent.com',
      appSecret: 'Hn7prVeGYVyQgJTwSb6kBTku',
      callbackUrl: 'http://localhost:3000/auth/google/callback'
    },
    redis: {
      ip: '127.0.0.1',
      port: 6379
    }
  }
  
}

module.exports = envConfig[process.env.ENV];