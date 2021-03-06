(function() {
  var _this = this;

  Showcase.ShowComponentsWizardController = Ember.Controller.extend({
    init: function() {
      this._super();
      this.set('steps', Ember.A([
        Ember.Object.create({
          title: 'Foo',
          template: 'tabs/foo-tabpane'
        }), Ember.Object.create({
          title: 'Bar',
          template: 'tabs/bar-tabpane'
        }), Ember.Object.create({
          title: 'Baz',
          template: 'tabs/baz-tabpane'
        })
      ]));
      return this.set('stepsNoPrev', Ember.A([
        Ember.Object.create({
          title: 'Step1',
          template: 'tabs/foo-tabpane',
          disabled: true
        }), Ember.Object.create({
          title: 'Step2',
          template: 'tabs/bar-tabpane',
          disabled: true
        }), Ember.Object.create({
          title: 'Step3',
          template: 'tabs/baz-tabpane',
          disabled: true
        })
      ]));
    },
    actions: {
      createWizard: function() {
        var body;
        body = Bootstrap.BsWizardComponent.extend({
          content: [
            Ember.Object.create({
              title: 'Step1',
              template: 'wizard/step1',
              disabled: true
            }), Ember.Object.create({
              title: 'Step2',
              template: 'wizard/step2',
              disabled: true
            }), Ember.Object.create({
              title: 'Step3',
              template: 'wizard/step3',
              disabled: true
            })
          ],
          targetObject: this,
          onNext: "onNext",
          onPrev: "onPrev",
          onFinish: 'onFinish'
        });
        return Bootstrap.ModalManager.open('manualModal', 'Wizard Title...', body, null, this);
      },
      onNext: function() {
        return console.log('NEXT');
      },
      onPrev: function() {
        return console.log('PREV');
      },
      onFinish: function() {
        Bootstrap.ModalManager.close('manualModal');
        return Bootstrap.NM.push('Wizard completed!');
      }
    }
  });

}).call(this);
