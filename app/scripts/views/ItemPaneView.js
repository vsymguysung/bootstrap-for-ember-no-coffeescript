(function() {
  Bootstrap.ItemPaneView = Ember.View.extend({
    template: Ember.Handlebars.compile(['{{#if view.content.template}}', '{{bsItemPanePartial view.content.template}}', '{{/if}}'].join("\n")),
    corrItem: (function() {
      var view, _i, _len, _ref;
      if (this.get('parentView').get('corrItemsView') != null) {
        _ref = this.get('parentView').get('corrItemsView')._childViews;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          view = _ref[_i];
          if (view.content === this.get('content')) {
            return view;
          }
        }
      }
    }).property('parentView.corrItemsView'),
    isVisible: (function() {
      var _ref;
      return (_ref = this.get('corrItem')) != null ? _ref.get('isActive') : void 0;
    }).property('corrItem.isActive'),
    controller: (function() {
      var controller, itemController;
      controller = this.get('parentView.controller');
      if (this.get('content.controller')) {
        itemController = this.get('container').lookup("controller:" + (this.get('content.controller')));
        if (itemController) {
          controller = itemController;
        }
      }
      return controller;
    }).property('content')
  });

  Ember.Handlebars.helper("bsItemPanePartial", function(templateName, options) {
    var template, view;
    view = options.data.view;
    template = view.templateForName(templateName);
    Ember.assert("Unable to find template with name '" + templateName + "'", template);
    return template(this, {
      data: options.data
    });
  });

}).call(this);
