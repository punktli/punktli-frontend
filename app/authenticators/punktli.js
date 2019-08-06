import Base from 'ember-simple-auth/authenticators/base';
import fetch from 'fetch';
import { assign } from '@ember/polyfills';
import { Promise, reject, resolve } from 'rsvp';
import { isEmpty } from '@ember/utils';
import EmberObject from '@ember/object';
import { inject as service } from '@ember/service';
import ENV from 'punktli-frontend/config/environment';

export default Base.extend({
  host: ENV.APP.apiHostname,
  session: service(),
  restore(data) {
    console.log('Restore the session');
    console.log(data);
    return this._validate(data) ? Promise.resolve(data) : Promise.reject();
  },

  authenticate(credentials, headers) {
    console.log('PUNKTLI authenticator');
    return this.makeRequest(`${this.host}/auth/sign_in`, credentials, assign({}, this.headers, headers)).then(response => {

      //response.json.data['access_token'] = response.headers.get('access-token');
      response.json.data.access_token = response.headers.get('access-token');
      response.json.data.client = response.headers.get('client');
      response.json.data.expiry = response.headers.get('expiry');
      console.log(response.json);
      return response.json;
    });
  },

  invalidate() {
    return resolve();
  },

  /**
    @method makeRequest
    @param {Object} url Server endpoint
    @param {Object} data Object that will be sent to server
    @param {Object} headers Additional headers that will be sent to server
  */
  makeRequest(url, data, headers) {
    console.log(data);
    return fetch(url, {
      method: 'POST',
      headers: assign({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, headers),
      body: JSON.stringify(data)
    }).then(response => {
      const res = {
        statusText: response.statusText,
        status: response.status,
        headers: response.headers
      };

      return response.text().then(text => {
        res.text = text;
        try {
          console.log(res.headers);
          res.json = JSON.parse(text);
        } catch (e) {
          return reject(res);
        }

        if (response.ok) {
          return res;
        } else {
          return reject(res);
        }
      }).catch(() => {
        return reject(res);
      });
    });
  },

  _validate(data) {
    const _data = data.data;
    return !isEmpty(_data["access_token"]) && !isEmpty(_data["client"]) && !isEmpty(_data["uid"]) && !isEmpty(_data["expiry"]);
  }
});
