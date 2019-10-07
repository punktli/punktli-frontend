import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    //return this.modelFor('settings.openings');
    return this.store.findRecord('opening-day', params.opening_day_id, {
      include: 'openings',
      reload: true
    });
  },
  setupController(controller, model) {
    this._super(controller, model);
  },
  deactivate() {
    for (const opening of this.modelFor('settings.openings').get('content')) {
      opening.rollbackAttributes();
    }
  }
});
