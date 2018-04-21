const path = require('path');
const express = require('express');
//const path = require('path');
const bodyparser = require('body-parser');


const authAPI = require('./entities/auth/api');
// const userAPI = require('./entities/user/api');
// const itemAPI = require('./entities/item/api');
// const commentAPI = require('./entities/comment/api');


const routesConfig = (app,passport) => {
  // serves static files from public directory
  // const publicPath = path.resolve(__dirname, '../public');
  // app.use(express.static(publicPath));

  // serve api endpoint
  app.get('/api', (req, res) => {
    res.send('Hello from API endpoint');
  });

  // apply user apis

  authAPI(app,passport);
  // userAPI(app);

  // itemAPI(app);
  // commentAPI(app);

};

module.exports = routesConfig;
