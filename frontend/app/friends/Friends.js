'use strict';

FbFriends.Friends = Backbone.Collection.extend({
  model: FbFriends.Friend,

  /**
   * [filterByFullname description]
   * @param  {String} query
   */
  filterByFullname: function(query){
    console.log('query', query);
    var filteredColl = this.filter(function(friendModel){
      return friendModel.fullNameContains(query);
    });
    this.trigger('reset', filteredColl);
  }
});
