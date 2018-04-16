// modules for server
var express = require('express');
var mongoose = require('mongoose');
var http = require('http');
var bodyParser = require('body-parser');

// server configurations
const hostname = 'localhost';
const port = 3000;

//DB connection
var databaseConfig = require('./database.js');
mongoose.connect(databaseConfig.DBurl);


// initialize express
var app = express();

// apply express config
require('./express')(app);

 // running the server 
const server = http.createServer(app); 
server.listen(port, hostname, () => {
 console.log(`Server running at http://${hostname}:${port}/`);
});
