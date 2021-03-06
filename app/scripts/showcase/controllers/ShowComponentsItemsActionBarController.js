(function() {
  Showcase.ShowComponentsItemsActionBarController = Ember.Controller.extend({
    actionsInBar: [
      [
        {
          title: 'To Alerts',
          disabled: function(selection) {
            var _ref;
            if (selection.size < 1 || (selection != null ? (_ref = selection[0]) != null ? _ref.title : void 0 : void 0) !== 'Alerts') {
              return true;
            }
          },
          transitionTo: 'show_components.alert'
        }, {
          title: 'To Panels',
          transitionTo: 'show_components.panel',
          disabled: function(selection) {
            var _ref;
            if (selection.size < 1 || (selection != null ? (_ref = selection[0]) != null ? _ref.title : void 0 : void 0) !== 'Panels') {
              return true;
            }
          }
        }
      ], [
        {
          title: 'To Wizard',
          disabled: function(selection) {
            var _ref;
            if (selection.size < 1 || (selection != null ? (_ref = selection[0]) != null ? _ref.title : void 0 : void 0) !== 'Wizards') {
              return true;
            }
          },
          clickActionName: 'wizard'
        }
      ]
    ],
    actions: {
      wizard: function(selection) {
        return alert("Wizard pressed!");
      }
    },
    items: [
      Ember.Object.create({
        title: 'Alerts'
      }), Ember.Object.create({
        title: 'Panels'
      }), Ember.Object.create({
        title: 'Wizards'
      })
    ]
  });

}).call(this);
