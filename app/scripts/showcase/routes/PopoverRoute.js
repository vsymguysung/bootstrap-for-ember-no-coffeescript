(function() {
  Showcase.ShowComponentsPopoverRoute = Ember.Route.extend({
    renderTemplate: function() {
      var controller;
      this.render();
      controller = this.controllerFor('ShowComponentsTooltipBox');
      return this.render('bs-tooltip-box', {
        outlet: "bs-tooltip-box",
        controller: controller,
        into: "application"
      });
    }
  });

}).call(this);
