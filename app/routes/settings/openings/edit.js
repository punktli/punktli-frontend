import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  queryParams: {
    day: {
      refreshModel: true
    }
  },
  model() {
    return this.modelFor('settings.openings');
  },
  setupController(controller, model) {
    this._super(controller, model);
  }
});
