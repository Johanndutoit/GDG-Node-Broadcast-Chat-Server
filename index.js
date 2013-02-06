// Require for Networking Functions
var net = require('net');

// Create Server with Callbacks
var server = net.createServer(function (socket) {

	// Welcome the User !
	socket.write('Welcome to the GDG Chat Server!\r\n');

	// Pipe response back to client
	socket.pipe(socket);
});

// Listen on 1337 cause we are LEET
server.listen(1337, '127.0.0.1');