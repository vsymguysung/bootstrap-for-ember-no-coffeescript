(function() {
  Showcase.ShowComponentsButtonController = Ember.Controller.extend({
    isButtonDisabled: false,
    loadingState: null,
    loadingState1: null,
    actions: {
      disableButton: function() {
        return this.set('isButtonDisabled', true);
      },
      startLoading: function() {
        var _this = this;
        this.set('loadingState', 'loading');
        return Ember.run.later(function() {
          return _this.set('loadingState', null);
        }, 2000);
      },
      startLoading1: function() {
        var _this = this;
        this.set('loadingState1', 'loading');
        return Ember.run.later(function() {
          return _this.set('loadingState1', 'completed');
        }, 2000);
      },
      buttonWithParam: function(expectedMyself) {
        return alert("Passed controller as a param: " + expectedMyself);
      }
    }
  });

}).call(this);
