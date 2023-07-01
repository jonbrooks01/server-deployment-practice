'use strict'

const express = require('express');


const server = express();
const notFoundHandler = require('./routeErrorHandlers/404.js')
const errorHandler = require('./routeErrorHandlers/500.js')
const stamp = require('./middleware/stamp.js')

server.get('/hello', stamp, (req, res) => res.send(`hello ${req.timestamp}`));
server.get('/goodbye', (req, res) => res.send('goodbye'));
server.get('/bad', (req, res, next) => 
  next({message: 'this route is no good'})
  );

server.use('*', notFoundHandler);
server.use(errorHandler);

module.exports = server;