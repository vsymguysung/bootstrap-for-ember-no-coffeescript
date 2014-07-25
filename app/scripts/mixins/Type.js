(function() {
  var Bootstrap, get, set;

  Bootstrap = window.Bootstrap;

  get = Ember.get;

  set = Ember.set;

  Bootstrap.TypeSupport = Ember.Mixin.create({
    classTypePrefix: Ember.required(String),
    classNameBindings: ['typeClass'],
    type: 'default',
    typeClass: (function() {
      var pref, type;
      type = this.get('type');
      if (type == null) {
        type = 'default';
      }
      pref = this.get('classTypePrefix');
      return "" + pref + "-" + type;
    }).property('type').cacheable()
  });

}).call(this);
