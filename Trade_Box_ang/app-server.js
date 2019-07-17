const http = require('http');

const express = require('express');

const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

Task = require('./api/models/goodsModel');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mydb');

/* app.use(function (req, res) {
  res.status(404).send({
    url: req.originalUrl + ' not found'
  });
}); */

/* app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); */

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require('./api/routes/goodsRoutes'); //importing route
routes(app); //register the route

app.use(express.static('tradebox/dist/tradebox/'));
/* G:\ITMO\Node_course\Trade_Box_ang\tradebox\dist\tradebox */

const server = http.Server(app);
/* server.listen(4200); */
app.listen(4200);

console.log('RESTful API server started on: ' + 4200);
