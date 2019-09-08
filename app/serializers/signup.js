import DS from 'ember-data';
import { decamelize } from '@ember/string';

export default DS.JSONSerializer.extend({
  keyForAttribute(attr, method) {
    return decamelize(attr);
  },
  keyForRelationship(key, relationship, method) {
    if (relationship === 'belongsTo') {
      key = key + '_id';
    }
    return key;
  },
  serialize(snapshot, options) {
    let json = this._super(...arguments);

    if (json.password) {
      json.password_confirmation = json.password;
    }

    return json;
  },
});
