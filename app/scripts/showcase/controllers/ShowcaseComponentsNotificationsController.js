(function() {
  Showcase.ShowComponentsNotificationsController = Ember.Controller.extend({
    actions: {
      pushInfo: function() {
        return Bootstrap.NM.push('Hello, this is just an info message.', 'info');
      },
      pushWarn: function() {
        return Bootstrap.NM.push('Could not perform operation!', 'warning');
      },
      pushSuccess: function() {
        return Bootstrap.NM.push('Successfully performed operation!', 'success');
      },
      pushDanger: function() {
        return Bootstrap.NM.push('Danger! system is halting!', 'danger');
      }
    }
  });

}).call(this);
