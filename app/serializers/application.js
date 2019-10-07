import DS from 'ember-data';
import { decamelize } from '@ember/string';
import { underscore } from '@ember/string';

export default DS.JSONAPISerializer.extend({
  keyForAttribute(attr) {
    return decamelize(attr);
  },
  keyForRelationship(key) {
    return underscore(key);
  }
  // keyForLink(key, kind) {
  //   console.log('Key for link');
  //   console.log(key);
  //   console.log(kind);
  //   if (kind === 'belongsTo') {
  //     key = key + '_id';
  //   }
  //   return key;
  // },
  //keyForRelationship(key, relationship, method) {
    // console.log('Key for relationship');
    // console.log(key);
    // console.log(relationship);
    // console.log(method);
    // if (relationship === 'belongsTo') {
    //   key = key + '_id';
    // }
    // return key;
 // }
});
