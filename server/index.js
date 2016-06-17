const http = require('http');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const slow = require('connect-slow');

/**
 *  My imports.
 * */

const cocktailRoutes = require('./routes/cocktailRoutes');

var app = express();

// Serve static images from this directory
app.use(express.static('./public'));

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

// For simulating slow connection
app.use(slow({
  delay: 10
}));

/**
 *  Routes
 * */

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Log every requests url
app.use(function(req, res, next) {
  console.log(req.url);
  next();
});

app.use('/api', [cocktailRoutes]);


/**
 * Error handler. Must be defined at the end of the app.use list
 * so it catches everything that hasn't been handled by the routes.
 * */

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});


/**
 * Get port from environment and store in Express.
 */

const port = 3001;
app.set('port', port);

const server = http.createServer(app);
server.listen(port ,function() {
  console.log(`Server started at: ${port}`);
});