import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  queryParams: {
    patientId: {
      refreshModel: true
    }
  },
  model(params) {
    const model = this.modelFor('event.new');

    if (params.patientId) {
      return this.store.findRecord('patient', params.patientId).then(function(patient) {
        model.set('patient', patient);
        return model;
      });
    } else {
      return model;
    }

  },
  setupController(controller, model) {
    this._super(controller, model);

    // Implement your custom setup after
    this.controllerFor('application').set('navigation', 'connected');
    this.controllerFor('application').set('showFooter', false);
  }
});
