import DS from 'ember-data';
import ENV from 'punktli-frontend/config/environment';

export default DS.RESTAdapter.extend({
  host: ENV.APP.apiHostname,
  buildURL (modelName, id, snapshot, requestType, query) {
    let url = 'users';

    if (requestType === 'createRecord') {
      url = 'auth';
    }

    if (id) {
      url = url + '/' + id;
    }

    return ENV.APP.apiHostname + '/' + url;
  }
});
