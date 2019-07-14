import DS from 'ember-data';
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  serialize(snapshot, options) {
    let json = this._super(...arguments);

    if (json.password) {
      json.password_confirmation = json.password;
    }

    return json;
  }
});
