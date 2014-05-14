'use strict';

FbFriends.SearchView = Backbone.View.extend({
	// On s'inscrit aux évènements qui nous intéressent: "eventName #selecteur": "callBack"
	events: {
		"keyup #search-query": "search"
	},

	initialize: function(options) {
		_.extend(this, options);
	},

	search: function(event) {
		console.log(event.target.value);
	}
});