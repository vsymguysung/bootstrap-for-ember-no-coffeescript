(function() {
  var getParentView, getProperty;

  getParentView = function(view) {
    var ok, parentView;
    if (!(view && (parentView = view.get('parentView')))) {
      return;
    }
    ok = parentView instanceof Bootstrap.ItemsView;
    Ember.assert("The parent view must be an instance of Bootstrap.ItemsView or any inherited class", ok);
    if (ok) {
      return parentView;
    } else {
      return void 0;
    }
  };

  getProperty = function(obj, prop, noGetReturns) {
    if (!(Ember.typeOf(obj) === 'instance' || Ember.canInvoke(obj, 'get'))) {
      return noGetReturns;
    }
    return obj.get(prop);
  };

  /*
  Views that are rendered as an Item of the ItemsView should extends from this view.
  
  When a click event is received the current item will be stored in the parent view 'selected' property,
  An extra 'active' css class will be assigned to the Item (this) if this is a selected item.
  
  Views that extends this view can be enhanced with:
  ItemSelection: Makes the item selectable.
  */


  Bootstrap.ItemView = Ember.View.extend({
    isItem: true,
    classNameBindings: ['disabled'],
    /*
    A calculated property that defines the title of the item.
    */

    title: (function() {
      var content, itemTitleKey, itemsView;
      if (!(itemsView = getParentView(this))) {
        return;
      }
      itemTitleKey = itemsView.get('itemTitleKey') || 'title';
      content = this.get('content');
      return getProperty(content, itemTitleKey, content);
    }).property('content').cacheable(),
    /*
    Determine whether the item is disabled or not
    */

    disabled: (function() {
      var content, disabled, itemsView;
      if (!(itemsView = getParentView(this))) {
        return;
      }
      content = this.get('content');
      disabled = !!getProperty(content, 'disabled', false);
      if (disabled && this.get('isActive')) {
        itemsView.set('selected', null);
      }
      return disabled;
    }).property('content', 'content.disabled').cacheable()
  });

}).call(this);
