(function() {
  Showcase.ShowComponentsWellController = Ember.Controller.extend({
    wellClick: function() {
      return alert("Hello from controller: A click in a well!");
    }
  });

}).call(this);
