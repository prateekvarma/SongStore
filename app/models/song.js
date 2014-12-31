exports.definition = {
	config: {
		adapter: {
			type: "song_acs", //< use either book_rest or book_acs
			collection_name: "song",
			// Endpoint URL to access the service for the REST sync adapter
			base_url: '10.0.0.37:51615'
		}
	},		
	extendModel: function(Model) {
		// Mongo uses _id as the model ID
		_.extend(Model.prototype, {
			idAttribute: '_id'
		});
		return Model;
	}
};
