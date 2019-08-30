import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import moment from 'moment';

export default Route.extend({
  session: service(),
  model() {
    return this.get('store').createRecord('signup', {
      timezone: moment.tz.guess()
    });
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
    controller.set('company', this.get('store').createRecord('company', {
      timezone: moment.tz.guess()
    }));

    // Implement your custom setup after
    this.controllerFor('application').set('navigation', 'blank');
    this.controllerFor('application').set('showFooter', false);
  }
});
