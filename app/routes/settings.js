import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  setupController(controller, model) {
    this._super(controller, model);

    // Implement your custom setup after
    this.controllerFor('application').set('navigation', 'connected');
    this.controllerFor('application').set('showFooter', false);
  }
});
