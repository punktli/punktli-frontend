import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),
  model() {
    return this.get('store').createRecord('user');
  },
  beforeModel() {
    if (this.get('session.isAuthenticated')) {
      this.transitionTo('calendar');
    }
  },
  setupController: function(controller, model) {
    // Call _super for default behavior
    this._super(controller, model);

    //Creates an empty company
    controller.set('company', this.get('store').createRecord('company'));

    // Implement your custom setup after
    this.controllerFor('application').set('navigation', 'blank');
    this.controllerFor('application').set('showFooter', false);
  }
});
