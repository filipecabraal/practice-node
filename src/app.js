
const express = require('express'); //Requisition of "express" module.
const bodyParser = require('body-parser'); //Module to convert the body in json. 

const app = express(); //Add the "express" module in a variable (to start it).
const router = express.Router(); //Starting the route that can be used.

app.use(bodyParser.json()); // All content of the body converted in json.
app.use(bodyParser.urlencoded({extended: false})); // Adjust URL.


// Create the route with the method to send.
const route = router.get( '/', (req, res, next) => {
	res.status(200).send({
		title: 'Node Store API',
		version: '0.0.1'
	});
});

const create = router.post( '/', (req, res, next) => {
	res.status(201).send(req.body);
});

const put = router.put( '/:id', (req, res, next) => {
	let id = req.params.id;
	res.status(200).send({
		id: id,
		item: req.body
	});
});

const del = router.delete( '/', (req, res, next) => {
	res.status(200).send(req.body);
});

app.use('/', route); // Set the route to get on app.
app.use('/products', create); // Set the route to post on app.
app.use('/products', put); // Set the route to put on app.
app.use('/products', del); // Set the route to delete on app.

module.exports = app; // Export the application.