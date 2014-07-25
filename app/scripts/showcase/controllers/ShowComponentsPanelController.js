(function() {
  Showcase.ShowComponentsPanelController = Ember.Controller.extend({
    actions: {
      panelClicked: function() {
        return alert("Hello from controller: A click in a panel!");
      },
      panelClosed: function() {
        return alert("Hello from controller: The panel was closed!");
      }
    }
  });

}).call(this);
