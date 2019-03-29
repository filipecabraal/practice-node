
const express = require('express'); //Requisition of "express" module.
const bodyParser = require('body-parser'); //Module to convert the body in json. 

const app = express(); //Add the "express" module in a variable (to start it).
const router = express.Router(); //Starting the route that can be used.

// Loading routers.
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json()); // All content of the body converted in json.
app.use(bodyParser.urlencoded({extended: false})); // Adjust URL.

app.use('/', indexRoute); // Set the route to get on app.
app.use('/products', productRoute); // Set the route to post on app.

module.exports = app; // Export the application.