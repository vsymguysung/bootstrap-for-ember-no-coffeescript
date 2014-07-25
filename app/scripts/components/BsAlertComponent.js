(function() {
  Bootstrap.BsAlertComponent = Ember.Component.extend(Bootstrap.TypeSupport, {
    classNames: ['alert'],
    classNameBindings: ['fade', 'fade:in'],
    layoutName: 'components/bs-alert',
    classTypePrefix: 'alert',
    attributeBindings: ['data-timeout'],
    dismissAfter: 0,
    closedParam: null,
    didInsertElement: function() {
      var _this = this;
      if (this.dismissAfter > 0) {
        Ember.run.later(this, 'dismiss', this.dismissAfter * 1000);
      }
      Ember.$("#" + this.elementId).bind('closed.bs.alert', function() {
        _this.sendAction('closed', _this.get('closedParam'));
        return _this.destroy();
      });
      return Ember.$("#" + this.elementId).bind('close.bs.alert', function() {
        return _this.sendAction('close', _this.get('closedParam'));
      });
    },
    dismiss: function() {
      return Ember.$("#" + this.elementId).alert('close');
    }
  });

  Ember.Handlebars.helper('bs-alert', Bootstrap.BsAlertComponent);

}).call(this);
