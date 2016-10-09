'use strict';
const messages = require('./messages');
const user = require('./user');
const authentication = require('./authentication');

module.exports = function() {
  const app = this;


  app.configure(authentication);
  app.configure(user);
  app.configure(messages);
};
