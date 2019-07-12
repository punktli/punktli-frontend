import Route from '@ember/routing/route';

export default Route.extend({
  setupController: function(controller, model) {
    // Call _super for default behavior
    this._super(controller, model);

    // Implement your custom setup after
    this.controllerFor('application').set('navigation', 'top');
    this.controllerFor('application').set('showFooter', true);
  }
});
