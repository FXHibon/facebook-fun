'use strict';

FbFriends.Friends = Backbone.Collection.extend({
  model: FbFriends.Friend,
  displayedFriends: null,

    initialize: function() {
        this.on('reset', this.init, this);
    },
    
    init: function(friends) {
        this.displayedFriends = friends.models;
    },

  /**
   * [filterByFullname description]
   * @param  {String} query
   */
  filterByFullname: function(query){
    var filteredColl = this.filter(function(friendModel){
      return friendModel.fullNameContains(query);
    });
    this.trigger('reset', filteredColl);
    this.displayedFriends = filteredColl;
  },
  
  sortByName: function() {
      var sortedArray = _.sortBy(this.displayedFriends, function (val) { return val.get("last_name"); });
      this.trigger('reset', sortedArray);
      this.displayedFriends = sortedArray;
  },
  
  sortByBirthday: function() {
      var sortedArray = _.sortBy(this.displayedFriends, function (val) { return val.get("birthday_date"); });
      this.trigger('reset', sortedArray);
      this.displayedFriends = sortedArray;
  }
});
