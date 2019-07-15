import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  name: DS.attr(),
  isAllDay: DS.attr('boolean'),
  startTime: DS.attr('date'),
  endTime: DS.attr('date'),
  notes: DS.attr(),
  patient: DS.belongsTo(),
  company: DS.belongsTo()
});
