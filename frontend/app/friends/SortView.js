'use strict';

FbFriends.SortView = Backbone.View.extend({
  events:{
    'click #search-by-name': 'sortByName',
    'click #search-by-birthday': 'sortByBirthday'
  },

  initialize: function(options){
    _.extend(this, options);
  },

  sortByName: function(event){
    this.friends.sortByName();
  },
  
  sortByBirthday: function(event){
    this.friends.sortByBirthday();
  }
});
