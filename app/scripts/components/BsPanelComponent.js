(function() {
  Bootstrap.BsPanelComponent = Ember.Component.extend(Bootstrap.TypeSupport, {
    layoutName: 'components/bs-panel',
    classNames: ['panel'],
    classTypePrefix: ['panel'],
    classNameBindings: ['fade', 'fade:in'],
    clicked: null,
    onClose: null,
    fade: true,
    collapsible: false,
    open: true,
    actions: {
      close: function(event) {
        this.sendAction('onClose');
        this.$().removeClass('in');
        return setTimeout((function() {
          return this.destroy();
        }).bind(this), 250);
      }
    },
    click: function(event) {
      return this.sendAction('clicked');
    },
    collapsibleBodyId: (function() {
      return "" + (this.get('elementId')) + "_body";
    }).property('collapsible'),
    collapsibleBodyLink: (function() {
      return "#" + (this.get('elementId')) + "_body";
    }).property('collapsibleBodyId')
  });

  Ember.Handlebars.helper('bs-panel', Bootstrap.BsPanelComponent);

}).call(this);
