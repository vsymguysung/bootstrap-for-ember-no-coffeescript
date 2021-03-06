/*
A mixin for Items that have a value property
*/


(function() {
  Bootstrap.ItemValue = Ember.Mixin.create({
    /*
    The value of the item, currently Items content supports only an array of strings, so value is the actual 'content' property
    of the item.
    */

    value: (function() {
      var itemsView, value;
      itemsView = this.get('parentView');
      if (itemsView == null) {
        return;
      }
      value = this.get('content');
      return value;
    }).property('content').cacheable()
  });

}).call(this);
