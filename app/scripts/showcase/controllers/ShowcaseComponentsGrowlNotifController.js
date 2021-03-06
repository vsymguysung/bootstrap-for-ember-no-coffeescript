(function() {
  Showcase.ShowComponentsGrowlNotifController = Ember.Controller.extend({
    actions: {
      pushInfo: function() {
        return Bootstrap.GNM.push('INFO!', 'Hello, this is just an info message.', 'info');
      },
      pushSuccess: function() {
        return Bootstrap.GNM.push('SUCCESS!', 'Successfully performed operation!', 'success');
      },
      pushWarn: function() {
        return Bootstrap.GNM.push('WARN!', 'Could not perform operation!', 'warning');
      },
      pushDanger: function() {
        return Bootstrap.GNM.push('Danger!', 'System is halting!', 'danger');
      }
    }
  });

}).call(this);
