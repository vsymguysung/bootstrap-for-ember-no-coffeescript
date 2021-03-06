(function() {
  Bootstrap.BsWellComponent = Ember.Component.extend({
    layoutName: 'components/bs-well',
    classNameBindings: ['small:well-sm', 'large:well-lg'],
    classNames: ['well'],
    click: function() {
      return this.sendAction('clicked');
    }
  });

  Ember.Handlebars.helper('bs-well', Bootstrap.BsWellComponent);

}).call(this);
