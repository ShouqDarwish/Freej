var express = require('express');
var mongojs = require('mongojs');
var http = require('http');
var bodyParser = require('body-parser');

//var contactRouter = require('./routes/contactRouter');

const hostname = 'localhost';
const port = 3001;

var app = express();
app.use(bodyParser.json());

//app.use('/contactList', contactRouter);

app.use(express.static(__dirname +"/public"));   

  
const server = http.createServer(app);
  
server.listen(port, hostname, () => {
 console.log(`Server running at http://${hostname}:${port}/`);
});

