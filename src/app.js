
const express = require('express'); //Requisition of "express" module.
const bodyParser = require('body-parser'); //Module to convert the body in json. 
const mongoose = require('mongoose'); //Module to connect at mongoDB. 

const app = express(); //Add the "express" module in a variable (to start it).
const router = express.Router(); //Starting the route that can be used.

// Connect to data base.
mongoose.connect('mongodb://localhost:27017/practice-node', {useNewUrlParser: true});
mongoose.set('useCreateIndex', true);

// Loading models.
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

// Loading routers.
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');

app.use(bodyParser.json()); // All content of the body converted in json.
app.use(bodyParser.urlencoded({extended: false})); // Adjust URL.

app.use('/', indexRoute); // Set the route to get on app.
app.use('/products', productRoute); // Set the route to post on app.
app.use('/customers', customerRoute);

module.exports = app; // Export the application.