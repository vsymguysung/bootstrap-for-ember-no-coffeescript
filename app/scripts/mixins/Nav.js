/*
A Mixin that provides the basic configuration for rendering a Bootstrap navigation such as tabs and pills
*/


(function() {
  Bootstrap.Nav = Ember.Mixin.create({
    classNames: ['nav'],
    classNameBindings: ['navTypeClass'],
    tagName: 'ul',
    navType: null,
    navTypeClass: (function() {
      if (this.navType != null) {
        return "nav-" + this.navType;
      } else {
        return null;
      }
    }).property('navType').cacheable()
  });

}).call(this);
