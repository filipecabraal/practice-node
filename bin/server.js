const app = require('../src/app'); // Taking the "app" settings to here.
const debug = require('debug')('nodestr:server'); //Initialize debuger tool.
const http = require('http'); //Use http server.

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('listening', onListening);
console.log('API rodando na porta ' + port + '...');

function normalizePort(val){
	const port = parseInt(val, 10);

	if (isNaN(port)) {
		return val;
	}

	if (port >= 0) {
		return port;
	}

	return false;
};

function onListening(){
	const addr = server.address();
	const bind = typeof addr === 'string'
		? 'pipe' + addr
		: 'port' + addr.port;
	debug('Listening on ' + bind);
};