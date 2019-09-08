import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.store.createRecord('patient');
  },
  setupController: function(controller, model) {
    // Call _super for default behavior
    this._super(controller, model);

    // Implement your custom setup after
    this.controllerFor('application').set('navigation', 'connected');
    this.controllerFor('application').set('showFooter', false);
  },
  deactivate() {
    if (this.get('currentModel').get('hasDirtyAttributes')) {
      this.get('currentModel').deleteRecord();
    }
  }
});
