'use strict';

FbFriends.Friends = Backbone.Collection.extend({
    model: FbFriends.Friend,
    displayedFriends: null,
    initialize: function() {
        this.on('reset', this.init, this);
    },
    init: function(friends) {
        if (friends && friends.models) {
            this.displayedFriends = friends.models;
        }
    },
    /**
     * [filterByFullname description]
     * @param  {String} query
     */
    filterByFullname: function(query) {
        var filteredColl = this.filter(function(friendModel) {
            return friendModel.fullNameContains(query);
        });
        this.trigger('reset', filteredColl);

        this.displayedFriends = filteredColl;

    },
    sortByName: function() {
        var sortedArray = _.sortBy(this.displayedFriends, function(val) {
            return val.get("last_name");
        });
        this.trigger('reset', sortedArray);
        this.displayedFriends = sortedArray;

    },
    
    sortGeneric: function(attr) {
        var sortedArray = _.sortBy(this.displayedFriends, function(val) {
            return val.get(attr);
        });
        this.trigger('reset', sortedArray);
        this.displayedFriends = sortedArray;

    },
    getAttributes: function() {
        var attrs = this.map(function(model) {
            return Object.keys(model.attributes).filter(function(key) {
                var val = model.attributes[key];
                return _.isString(val) || _.isNumber(val);
            });
        });

        attrs = _.flatten(attrs);
        attrs = _.uniq(attrs);
        return attrs;
    },
    getRepartitionSexe: function() {
        var tmp = _.countBy(this.displayedFriends, function(model) {
            return model.get("sex");
        });

        var sum = this.length;
        var results = {};
        _.map(tmp, function(val, key) {
            results[key] = val;
            return (val * 100) / sum;
        });

        return results;
    },
    getTopVillesData: function() {

        var results = {};
        this.forEach(function(model) {

            if (results[model.getAttribute("hometown_location.city")] == undefined) {
                results[model.getAttribute("hometown_location.city")] = 1;
            } else {
                results[model.getAttribute("hometown_location.city")]++;
            }
        });

        
        console.log(me);
    },
    
    getRelationShipPercent: function () {
        return this.countBy("relationship_status");
    }
});
