// Require for Networking Functions
var net = require('net');

// All the connected clients
var client_sockets = [];

// Count of Clients that have connected
var count_of_clients_that_have_connected = 0;

// Create Server with Callbacks
var server = net.createServer(function (socket) {

	// Add as connected client
	client_sockets.push(socket);

	// Update Count
	count_of_clients_that_have_connected = count_of_clients_that_have_connected + 1;

	// Welcome the User !
	socket.write('Welcome to the GDG Chat Server!\r\n');

	// Set a Default Name
	socket.username = 'Guest #' + count_of_clients_that_have_connected

	// Pipe response back to client
	socket.on('data', function(data){

		// Quick cast to string
		data = '' + data

		if(data.indexOf('/username') == 0) {

			// Set the username of the user !
			socket.username = data.split(' ')[1].replace('\r\n', '').replace('\n', '')

		} else {

			// Loop all the connected clients and send the message.
			// This will include the current socket too !
			for(var i = 0; i < client_sockets.length; i++) {

				client_sockets[i].write(socket.username + ": " + data);

			}

		}

	});
});

// Listen on 1337 cause we are LEET
server.listen(1337, '127.0.0.1');