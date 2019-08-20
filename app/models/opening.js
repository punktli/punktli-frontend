import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  day: DS.attr(),
  startTime: DS.attr(),
  endTime: DS.attr(),
  company: DS.belongsTo(),
});
