import ApplicationAdapter from './application';
import ENV from 'punktli-frontend/config/environment';

export default ApplicationAdapter.extend({
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
