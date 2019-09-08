import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import { inject as service } from '@ember/service';
import ENV from 'punktli-frontend/config/environment';

export default Route.extend(ApplicationRouteMixin, {
  currentUser: service(),

  beforeModel() {
    return this._loadCurrentUser();
  },

  async sessionAuthenticated() {
    await this._loadCurrentUser();
    this._super(...arguments);
  },

  _loadCurrentUser() {
    return this.get('currentUser').load().catch(() => {
      this.get('session').invalidate()
    });
  }
});
