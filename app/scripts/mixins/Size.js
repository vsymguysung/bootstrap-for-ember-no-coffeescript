(function() {
  var Bootstrap, get, set;

  Bootstrap = window.Bootstrap;

  get = Ember.get;

  set = Ember.set;

  Bootstrap.SizeSupport = Ember.Mixin.create({
    classTypePrefix: Ember.required(String),
    classNameBindings: ['sizeClass', 'largeSizeClass', 'smallSizeClass', 'extraSmallSizeClass'],
    size: null,
    xs: null,
    small: null,
    large: null,
    extraSmallSizeClass: (function() {
      var pref;
      pref = this.get('classTypePrefix');
      if (this.xs) {
        return "" + pref + "-xs";
      } else {
        return null;
      }
    }).property('xs').cacheable(),
    smallSizeClass: (function() {
      var pref;
      pref = this.get('classTypePrefix');
      if (this.small) {
        return "" + pref + "-sm";
      } else {
        return null;
      }
    }).property('small').cacheable(),
    largeSizeClass: (function() {
      var pref;
      pref = this.get('classTypePrefix');
      if (this.large) {
        return "" + pref + "-lg";
      } else {
        return null;
      }
    }).property('large').cacheable(),
    sizeClass: (function() {
      var pref, size;
      size = this.get('size');
      pref = this.get('classTypePrefix');
      if (size) {
        return "" + pref + "-" + size;
      } else {
        return null;
      }
    }).property('size').cacheable()
  });

}).call(this);
