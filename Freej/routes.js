// modules for routes
const express = require('express');

// routes configurations
const routesConfig = (app) => {

app.get('/api', (req, res) => {
    res.send('Hello from API ');
  });

};

module.exports = routesConfig;