'use strict';

FbFriends.Friend = Backbone.Model.extend({
  /**
   * @param  {String} query [description]
   * @return {Boolean}       true if nananana
   */
  fullNameContains: function(query){
    return this.get('name_format')
          .replace('{first}', this.get('first_name'))
          .replace('{last}', this.get('last_name')).toLowerCase()
        .indexOf(query.toLowerCase()) !== -1;
  }
});
