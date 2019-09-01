import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.modelFor('patients.patient');
  },
  setupController: function(controller, model) {
    // Call _super for default behavior
    this._super(controller, model);
  }
});
