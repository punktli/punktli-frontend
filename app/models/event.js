import DS from 'ember-data';
const { Model } = DS;
import { computed } from '@ember/object';
import moment from 'moment';

export default Model.extend({
  name: DS.attr(),
  isAllDay: DS.attr('boolean'),
  startTime: DS.attr('date'),
  endTime: DS.attr('date'),
  notes: DS.attr(),
  patient: DS.belongsTo(),
  company: DS.belongsTo(),
  category: DS.belongsTo(),
  day: computed('startTime', 'endTime', function() {
    return (this.startTime ? moment(this.startTime).format('YYYY-MM-DD') : null);
  })
});
