(function() {
  Showcase.Router.map(function() {
    return this.resource('show_components', function() {
      this.route('alert');
      this.route('breadcrumbs');
      this.route('modal');
      this.route('label');
      this.route('badge');
      this.route('well');
      this.route('list-group');
      this.route('panel');
      this.route('page-header');
      this.route('button');
      this.route('buttonGroup');
      this.route('progressbar');
      this.route('pills');
      this.route('tabs');
      this.route('tabs-panes');
      this.route('wizard');
      this.route('items_action_bar');
      this.route('tabs-with-routes');
      this.route('notifications');
      this.route('growl-notif');
      this.route('popover');
      return this.resource('user', function() {
        this.route('general');
        this.route('privacy');
        return this.route('activities');
      });
    });
  });

}).call(this);
