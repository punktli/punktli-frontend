import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  name: DS.attr(),
  color: DS.attr(),
  duration: DS.attr(),
});
