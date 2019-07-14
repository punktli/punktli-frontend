import DS from 'ember-data';
import { decamelize } from '@ember/string';

export default DS.JSONSerializer.extend({
  keyForAttribute(attr, method) {
    // console.log('Key for attribute');
    // console.log(decamelize(attr));
    return decamelize(attr);
  },
  // keyForLink(key, kind) {
  //   console.log('Key for link');
  //   console.log(key);
  //   console.log(kind);
  //   if (kind === 'belongsTo') {
  //     key = key + '_id';
  //   }
  //   return key;
  // },
  keyForRelationship(key, relationship, method) {
    // console.log('Key for relationship');
    // console.log(key);
    // console.log(relationship);
    // console.log(method);
    if (relationship === 'belongsTo') {
      key = key + '_id';
    }
    return key;
  }
});
