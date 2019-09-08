import Service from '@ember/service';
import { resolve } from 'rsvp';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';

export default Service.extend({
  session: service('session'),
  store: service(),

  load() {
    if (this.get('session.isAuthenticated')) {
      let userId = this.get('session.data.authenticated.data.id');
      if (!isEmpty(userId)) {
        return this.get('store').findRecord('user', userId).then((user) => {
          this.set('user', user);
        });
      } else {
        return resolve();
      }
    } else {
      return resolve();
    }
  }
});
