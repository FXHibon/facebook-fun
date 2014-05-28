'use strict';

FbFriends.SortView = Backbone.View.extend({
  events:{
    'click #sort-by-name': 'sortByName'
  },

  initialize: function(options){
    _.extend(this, options);
  },

  sortByName: function(event){
    this.friends.sortByName();
  }
});
