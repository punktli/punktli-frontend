import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.modelFor('event.new');
  },
  setupController(controller, model) {
    this._super(controller, model);

    this.get('store').findAll('patient').then((patients) => {
      controller.set('patients', patients);
    });
  }
});
