/*
Parent component of a progressbar component
*/


(function() {
  Bootstrap.BsProgressComponent = Ember.Component.extend({
    layoutName: 'components/bs-progress',
    classNames: ['progress'],
    classNameBindings: ['animated:active', 'stripped:progress-striped'],
    progress: null,
    stripped: false,
    animated: false,
    "default": (function() {
      return this.progress;
    }).property('progress')
  });

  Ember.Handlebars.helper('bs-progress', Bootstrap.BsProgressComponent);

}).call(this);
