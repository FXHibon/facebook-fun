FbFriends.Friend = Backbone.Model.extend({

	fullNameContains: function (query) {
		return this.get("name_format")
    		.replace("{first}", friendModel.get("first_name"))
    		.replace("{last}", friendModel.get("last_name"))
    		.indexOf(query.toLowerCase()) !== -1;
	}
});
