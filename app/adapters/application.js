import DS from 'ember-data';
import ENV from 'punktli-frontend/config/environment';
import { inject as service } from '@ember/service';
import { isPresent } from '@ember/utils';
import DataAdapterMixin from "ember-simple-auth/mixins/data-adapter-mixin";
import { isEmpty } from '@ember/utils';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  session: service(),
  host: ENV.APP.apiHostname,
  //host: 'http://localhost:3000',
  authorize(xhr) {
    if (this.get('session.data.authenticated.data.access_token')) {
      //let access_token = this.get('session.data.authenticated.data.access-token');
      let { access_token, client, uid, expiry } = this.get('session.data.authenticated.data');
      if (isPresent(access_token)) {
        xhr.setRequestHeader('access-token', access_token);
        xhr.setRequestHeader('client', client);
        xhr.setRequestHeader('uid', uid);
        xhr.setRequestHeader('expiry', expiry);
      }
    }
  },
  // handleResponse(status, headers, payload) {
  //   console.log(headers);
  //   if (!isEmpty(headers['access-token']) && this.get('session').set('data.authenticated.data.access_token') !== headers['access-token']) {
  //     console.log('Set new access token to session');
  //     this.get('session').set('data.new_access_token', headers['access-token']);
  //   }
  //   return payload;
  // }
});
