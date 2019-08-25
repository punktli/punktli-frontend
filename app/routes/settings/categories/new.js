import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import categories from './index';

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.store.createRecord('category', {
      'color': '#4E7CF7'
    });
  },
  deactivate() {
    this.get('currentModel').deleteRecord();
  }
});
