(function() {
  Showcase.ShowComponentsModalController = Ember.Controller.extend({
    message: 'Welcome to Bootstrap for Ember..!',
    myModalButtons: [
      Ember.Object.create({
        title: 'Submit',
        clicked: "submit"
      }), Ember.Object.create({
        title: 'Cancel',
        clicked: "cancel",
        dismiss: 'modal'
      })
    ],
    manualButtons: [
      Ember.Object.create({
        title: 'Submit',
        clicked: "submitManual"
      }), Ember.Object.create({
        title: 'Cancel',
        dismiss: 'modal'
      })
    ],
    actions: {
      submit: function() {
        Bootstrap.NM.push('Successfully submitted modal', 'success');
        return Bootstrap.ModalManager.hide('myModal');
      },
      cancel: function() {
        return Bootstrap.NM.push('Modal was cancelled', 'info');
      },
      show: function() {
        return Bootstrap.ModalManager.show('myModal');
      },
      submitManual: function() {
        Bootstrap.NM.push('Modal destroyed!', 'success');
        return Bootstrap.ModalManager.close('manualModal');
      },
      createModalProgramatically: function() {
        var body;
        body = Ember.View.extend({
          template: Ember.Handlebars.compile('This is a programatic ')
        });
        return Bootstrap.ModalManager.open('manualModal', 'Hello', 'demo-template', this.manualButtons, this);
      },
      confirm: function() {
        return Bootstrap.ModalManager.confirm(this);
      },
      modalConfirmed: function() {
        return Bootstrap.NM.push('Confirmed!', 'success');
      },
      modalCanceled: function() {
        return Bootstrap.NM.push('Cancelled!', 'info');
      }
    }
  });

}).call(this);
