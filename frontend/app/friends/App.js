'use strict';

FbFriends.App = Backbone.View.extend({
  friends: null,

  initialize: function(options){
    options = options || {};
    _.extend(this, options);
    this.friend.filter(function(friendModel){
    	return friendModel.fullNameContains(query);
    })
  },

  render: function(){
    this.profilesView.render(this.friends);
  }
})
