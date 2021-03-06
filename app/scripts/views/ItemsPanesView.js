(function() {
  Bootstrap.ItemsPanesView = Ember.CollectionView.extend({
    viewsInserted: false,
    corrItemsView: (function() {
      var itemsView;
      itemsView = Ember.View.views[this.get('items-id')];
      return itemsView;
    }).property('viewsInserted'),
    didInsertElement: function() {
      this._super();
      return this.set('viewsInserted', true);
    }
  });

}).call(this);
