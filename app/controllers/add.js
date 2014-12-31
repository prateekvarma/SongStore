var dialogs = require('alloy/dialogs');

function closeMe(e) {
	$.add.close();
}

function saveSong(e) {
	dialogs.confirm({message: 'Are you sure you want to save?', callback: function() {
		Alloy.Collections.song.create(
			{
				name: $.name.value,
				artist: $.artist.value,
				album: $.album.value
			},
			{
				wait: true, // Waits for a response from the server
				success: function(model, response, options) {// Custom call after a successufl call.
					var message = 'Song name '  + response.name + ' by ' + response.artist + 'from the album' + response.album  + '!'
					alert(message);
					$.name.value = $.artist.value = $.album.value = ''; // Clear the fields
				},
				error: function(model, response, options) { // Custom callback after an unsuccessful call.
					alert(response); // Alert the user there was an error.
				}
			}
		);
	}});
}