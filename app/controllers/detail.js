var args = arguments[0] || {};
var song = args.toJSON();
var model = args;
$.artist.value = song.artist || 'No artist';
$.name.value = song.name || 'No name';
$.album.value = song.album || 'No album';
if (song._id && song._rev){
	$._id.value = song._id;
	$._rev.value = song._rev;
}

var dialogs = require('alloy/dialogs');

function closeMe(e) {
	$.detail.close();
}

function updateSong(e) {
	dialogs.confirm({message: 'Are you sure you want to make changes?', callback: function() {
		model.save(
			{
				name: $.name.value,
				artist: $.artist.value,
				album: $.album.value,
				_id: $._id.value,
				_rev: $._rev.value,
			}
		);
	}});
}

function deleteSong(e) {
	dialogs.confirm({message: 'Are you sure you want to delete this song?', callback: function() {
		model.destroy({
			wait: true, // Waits for a response from the server
			success: function(mod, response, options) { // Custom callback after a successful call.
				$.detail.close(); // Close the window
			},
			error: function(mod, response, options) { // Custom callback after an unsuccessful call.
				alert(response); // Alert the user there was an error.
			}
		});
	}});
}
