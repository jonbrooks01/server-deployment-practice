'use strict';

const stamp = (req, res, next) => {
  req.timestamp = new Date();
  next();
};

module.exports = stamp;