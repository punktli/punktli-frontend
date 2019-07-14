import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  name: DS.attr(),
  isAllDay: DS.attr(),
  startTime: DS.attr(),
  endTime: DS.attr(),
  notes: DS.attr(),
  patient: DS.belongsTo(),
  company: DS.belongsTo()
});
