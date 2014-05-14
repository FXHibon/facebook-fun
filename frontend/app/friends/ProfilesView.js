'use strict';

FbFriends.ProfilesView = Backbone.View.extend({
  initialize: function(options){
    _.extend(this, options);
    this.friends.on("reset", function (friends) {
      this.renderProfiles(friends);
    })
  },

  renderProfiles: function(friends){
    var html = friends.map(function(friendModel){
      return this.tmpl({
        name: friendModel.get('first_name'),
        surname: friendModel.get('last_name'),
        pictureUrl: friendModel.get('pic_small'),
        birthday_date: friendModel.get('birthday_date')
      });
    }, this).join('\n');

    this.$el.empty().append(html);
  }
});
