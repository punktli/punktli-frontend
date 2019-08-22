import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return this.store.find('category', params.category_id);
  },
  setupController(controller, model) {
    this._super(controller, model);

    controller.set('pageTitle', model.name);
  }
});
