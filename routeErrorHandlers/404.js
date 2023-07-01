'use strict';

const notFoundHandler = (req, res) => {
  res.status(404).send({
    error: 404,
    route: req.path,
    message: 'nothing here buddy',
  });
};
module.exports = notFoundHandler;