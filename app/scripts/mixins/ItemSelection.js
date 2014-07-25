/*
A Mixin to enhance items enhanced with the 'IsItem' Mixin with selection capability.

When a click event is received the current item will be stored in the parent view 'selected' property,
An extra 'active' css class will be assigned to the Item (this) if this is a selected item.
*/


(function() {
  Bootstrap.ItemSelection = Ember.Mixin.create(Bootstrap.ItemValue, Bootstrap.WithRouter, {
    classNameBindings: ["isActive:active"],
    init: function() {
      this._super();
      return this.didRouteChange();
    },
    didRouteChange: (function() {
      var itemsView, linkTo, _ref;
      linkTo = this.get('content.linkTo');
      if (linkTo == null) {
        return;
      }
      itemsView = this.get('parentView');
      if (itemsView == null) {
        return;
      }
      if ((_ref = this.get('router')) != null ? _ref.isActive(linkTo) : void 0) {
        return itemsView.set('selected', this.get('value'));
      }
    }).observes('router.url'),
    /*
    Determine whether the current item is selected,
    if true the 'active' css class will be associated with the this DOM's element.
    
    This is a calculated property and will be retriggered if the 'value' property of the item has changed or the 'selected' property
    in the parent ItemsView.
    */

    isActive: (function() {
      var itemsView, selected, value;
      itemsView = this.get('parentView');
      if (itemsView == null) {
        return false;
      }
      selected = itemsView.get('selected');
      value = this.get('value');
      if (value == null) {
        return false;
      }
      return selected === value;
    }).property('value', 'parentView.selected', 'content.linkTo').cacheable(),
    /*
    Handle selection by click event.
    
    The identifier of the selection is based on the 'content' property of this item.
    */

    click: function(event) {
      var content, itemsView;
      event.preventDefault();
      itemsView = this.get('parentView');
      if (itemsView == null) {
        return;
      }
      content = this.get('content');
      if (typeof content === 'object') {
        if (content.get('disabled')) {
          return;
        }
      }
      if (this.get('content.linkTo') != null) {
        return;
      }
      return itemsView.set('selected', this.get('value'));
    }
  });

}).call(this);
