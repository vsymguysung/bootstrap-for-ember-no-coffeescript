(function() {
  Showcase.ShowComponentsAlertController = Ember.Controller.extend({
    actions: {
      submit: function() {
        return alert("Action taken by controller!");
      },
      didAlertClosed: function() {
        return alert("From controller: The -closed- event was triggered.");
      },
      didAlertClose: function() {
        return alert("From controller: The -close- event was triggered.");
      }
    }
  });

}).call(this);
