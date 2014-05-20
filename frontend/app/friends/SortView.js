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
    console.log("sorting");
    console.log(this.friends.models[0].get("last_name"));
    var sortedArray = _.sortBy(this.friends.models, function (val) { return val.get("last_name"); });
    this.friends.trigger('reset', sortedArray);
  },
  
  sortByBirthday: function(event){
    console.log("sorting");
    
    var sortedArray = _.sortBy(this.friends.models, function (val) { return val.get("birthday_date"); });
    this.friends.trigger('reset', sortedArray);
  }
});
