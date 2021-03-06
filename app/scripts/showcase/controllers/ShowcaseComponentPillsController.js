(function() {
  Showcase.ShowComponentsPillsController = Ember.Controller.extend({
    content: ['Home', 'Profile', 'Messages'],
    init: function() {
      this._super();
      this.set('content1', Ember.A([
        Ember.Object.create({
          title: 'Home',
          "default": true,
          disabled: false
        }), Ember.Object.create({
          title: 'Admin',
          disabled: true
        })
      ]));
      return this.set('selected1', this.get('content1').objectAt(0));
    },
    contentChanged: (function() {
      return console.log("Selection has changed to: " + (this.get('selected')));
    }).observes('selected'),
    actions: {
      disableHome: function() {
        return this.get('content1').objectAt(0).set('disabled', true);
      }
    }
  });

}).call(this);
