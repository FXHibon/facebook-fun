FbFriends.Friends = Backbone.Collection.extend({
  model: FbFriends.Friend

  filterByFullName: function (query) {
  	var filteredCall = this.filter(function(friendModel) {
  		return friendModel.filterByFullName(query);
  	})
  }
});
