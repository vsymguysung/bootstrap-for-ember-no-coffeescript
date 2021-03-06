/*
A parent view of views that supports multiple items rendering such as Navigations (Tabs, Pills)

Views that inherits from this view can be enhanced with:
- ItemsSelection: Enhances with selection capability.
*/


(function() {
  Bootstrap.ItemsView = Ember.CollectionView.extend({
    didInsertElement: function() {
      var defaultTab, view, _i, _len, _ref, _ref1;
      if (this.get('default')) {
        defaultTab = this.get('default');
        _ref = this._childViews;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          view = _ref[_i];
          if (((_ref1 = view.get('content')) != null ? _ref1.get('title') : void 0) === defaultTab) {
            this.set('selected', view.get('content'));
          }
        }
        return Ember.assert("Could not activate default tab " + defaultTab + " as it doesnt exist", defaultTab);
      }
    }
  });

}).call(this);
