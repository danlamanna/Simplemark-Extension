var SmApp = chrome.extension.getBackgroundPage().SmApp;

SmApp.Views.Bookmark_List = Backbone.View.extend({
     initialize: function() {
        this.collection = (SmApp.hasData('allBookmarks') ? SmApp.getData('allBookmarks') : SmApp.getAllBookmarks());
     },

     render: function() {
       jQuery(this.el).empty();
  
       if (this.collection.length) {
          var tmplt = _.template(jQuery('#bookmarks-listing').html());

          jQuery(this.el).append(tmplt({ bookmarks: this.collection.toJSON() }));
       } else {
          jQuery(this.el).html('Loading...');
       }

       return this;
     }
  });