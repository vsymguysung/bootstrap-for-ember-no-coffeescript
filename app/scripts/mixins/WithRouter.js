(function() {
  var Bootstrap, get;

  Bootstrap = window.Bootstrap;

  get = Ember.get;

  Bootstrap.WithRouter = Ember.Mixin.create({
    router: Ember.computed(function() {
      return get(this, "controller").container.lookup("router:main");
    })
  });

}).call(this);
