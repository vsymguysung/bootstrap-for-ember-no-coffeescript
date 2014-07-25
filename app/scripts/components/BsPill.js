(function() {
  Bootstrap.BsPill = Bootstrap.ItemView.extend(Bootstrap.NavItem, Bootstrap.ItemSelection, {
    template: Ember.Handlebars.compile('{{#if view.content.linkTo}}\n    {{#if view.parentView.dynamicLink}}\n        {{#link-to view.content.linkTo model}}{{view.title}}{{/link-to}}\n    {{else}}\n        {{#link-to view.content.linkTo}}{{view.title}}{{/link-to}}\n    {{/if}}\n{{else}}\n    {{view view.pillAsLinkView}}\n{{/if}}'),
    pillAsLinkView: Ember.View.extend({
      tagName: 'a',
      template: Ember.Handlebars.compile('{{view.parentView.title}}'),
      attributeBindings: ['href'],
      href: "#"
    })
  });

}).call(this);
