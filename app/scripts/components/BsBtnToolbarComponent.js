/*
Button Toolbar.

A collection of button groups
*/


(function() {
  Bootstrap.BsBtnToolbarComponent = Ember.Component.extend({
    layoutName: 'components/bs-btn-toolbar',
    classNames: ['btn-toolbar']
  });

  Ember.Handlebars.helper('bs-btn-toolbar', Bootstrap.BsBtnToolbarComponent);

}).call(this);
