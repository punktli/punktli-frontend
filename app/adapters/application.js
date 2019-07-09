import DS from 'ember-data';
import ENV from 'punktli-frontend/config/environment';

export default DS.RESTAdapter.extend({
  host: ENV.APP.apiHostname
});
