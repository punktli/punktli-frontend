import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return this.store.findRecord('note', params.note_id);
  },
  setupController: function(controller, model) {
    // Call _super for default behavior
    this._super(controller, model);

    controller.set('patient', this.modelFor('patients.patient'));
    controller.set('title', model.patient.get('fullName'));
  }
});
