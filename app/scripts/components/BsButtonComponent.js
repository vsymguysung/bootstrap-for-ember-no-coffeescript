(function() {
  Bootstrap.BsButtonComponent = Ember.Component.extend(Bootstrap.TypeSupport, Bootstrap.SizeSupport, {
    layoutName: 'components/bs-button',
    tagName: 'button',
    classNames: ['btn'],
    classNameBindings: ['blockClass'],
    classTypePrefix: 'btn',
    clickedParam: null,
    block: null,
    attributeBindings: ['disabled', 'dismiss:data-dismiss', '_type:type', 'style'],
    _type: 'button',
    bubbles: true,
    allowedProperties: ['title', 'type', 'size', 'block', 'disabled', 'clicked', 'dismiss', 'class'],
    icon_active: void 0,
    icon_inactive: void 0
  }, {
    init: function() {
      var attr, c, key, _i, _len, _ref, _results;
      this._super();
      if ((this.get('content') != null) && Ember.typeOf(this.get('content')) === 'instance') {
        c = this.get('content');
        _ref = this.get('allowedProperties');
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          key = _ref[_i];
          if (c[key] != null) {
            this.set(key, c[key]);
          }
        }
      } else {
        if (this.get('title') == null) {
          this.set('title', this.get('content'));
        }
      }
      _results = [];
      for (attr in this) {
        if (attr.match(/^data-[\w-]*$/) != null) {
          _results.push(this.attributeBindings.pushObject(attr));
        }
      }
      return _results;
    },
    blockClass: (function() {
      if (this.block) {
        return "" + this.classTypePrefix + "-block";
      } else {
        return null;
      }
    }).property('block').cacheable(),
    click: function(evt) {
      if (!this.get('bubbles')) {
        evt.stopPropagation();
      }
      return this.sendAction('clicked', this.get('clickedParam'));
    },
    loadingChanged: (function() {
      var loading;
      loading = this.get('loading') !== null ? this.get('loading') : "reset";
      return Ember.$("#" + this.elementId).button(loading);
    }).observes('loading'),
    icon: (function() {
      if (this.get('isActive')) {
        return this.get('icon_active');
      } else {
        return this.get('icon_inactive');
      }
    }).property('isActive')
  });

  Ember.Handlebars.helper('bs-button', Bootstrap.BsButtonComponent);

}).call(this);
