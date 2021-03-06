import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.get('store').createRecord('event');
  },
  setupController(controller, model) {
    this._super(controller, model);
  }
});
