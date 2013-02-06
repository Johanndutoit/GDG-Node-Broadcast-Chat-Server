// Require for Networking Functions
var net = require('net');

// All the connected clients
var client_sockets = [];

// Create Server with Callbacks
var server = net.createServer(function (socket) {

	// Add as connected client
	client_sockets.push(socket);

	// Welcome the User !
	socket.write('Welcome to the GDG Chat Server!\r\n');

	// Pipe response back to client
	socket.on('data', function(data){

		for(var i = 0; i < client_sockets.length; i++) {

			client_sockets[i].write(data);

		}

	});
});

// Listen on 1337 cause we are LEET
server.listen(1337, '127.0.0.1');