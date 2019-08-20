import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  queryParams: {
    day: {
      refreshModel: true
    }
  },
  model() {
    return this.get('store').findAll('opening');
  },
  setupController(controller, model) {
    this._super(controller, model);
  }
});
