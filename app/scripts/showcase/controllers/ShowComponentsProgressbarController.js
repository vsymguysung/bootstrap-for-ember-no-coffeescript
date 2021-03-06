(function() {
  Showcase.ShowComponentsProgressbarController = Ember.Controller.extend({
    prog: 0,
    incrementBy: 20,
    actions: {
      increment: function() {
        if (this.prog < 100) {
          return this.incrementProperty("prog", this.incrementBy);
        } else {
          return this.set("prog", this.incrementBy);
        }
      }
    }
  });

}).call(this);
