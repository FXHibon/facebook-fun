'use strict';

FbFriends.SearchView = Backbone.View.extend({
  events:{
    'keyup #search-query': 'search'
  },

  initialize: function(options){
    _.extend(this, options);
      this.friends.on('reset', this.render, this);
  },

  search: function(event){
    this.friends.filterByFullname(event.target.value);
  },
  
  sort: function(event){
    console.log("filtering:" + event);
    if (event && event.target && event.target.value) {
        this.friends.sortGeneric(event.target.value);
    }
  },
  
  render: function(){
    this.$el.find('#attributes-container').html(this.tmpl({attrs: this.friends.getAttributes()}));
  }
});
