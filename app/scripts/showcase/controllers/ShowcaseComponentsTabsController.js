(function() {
  Showcase.ShowComponentsTabsController = Ember.Controller.extend({
    content: ['Home', 'Profile', 'Messages'],
    init: function() {
      this._super();
      this.set('selected', 'Home');
      return this.set('tabsPanesOptions', Ember.A([
        Ember.Object.create({
          title: 'Foo',
          template: 'tabs/foo-tabpane'
        }), Ember.Object.create({
          title: 'Bar',
          template: 'tabs/bar-tabpane'
        })
      ]));
    }
  });

}).call(this);
