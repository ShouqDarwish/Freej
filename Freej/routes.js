
const express = require('express');
//const path = require('path');

const itemAPI = require('./entities/item/api');

/**
 * routes configurations
 */
const routesConfig = (app) => {
  // serves static files from public directory
  // const publicPath = path.resolve(__dirname, '../public');
  // app.use(express.static(publicPath));

  // serve api endpoint
  app.get('/api', (req, res) => {
    res.send('Hello from API endpoint');
  });

  // apply user apis
  //itemAPI(app);

};

module.exports = routesConfig;
