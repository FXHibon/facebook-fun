FbFriends.SearchView = Backbone.View.extend({
  events:{
    'keyup #search-query': 'search'
  },

  initialize: function(options){
    _.extend(this, options);
  },

  search: function(event){
    this.friends.filterByFullname(event.target.value);
  }
});
