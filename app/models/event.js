import DS from 'ember-data';
const { Model } = DS;
import { computed, observer } from '@ember/object';
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
  }),
  startTimeChanged: observer('startTime', 'category', function() {
    if (this.category.get('duration')) {
      this.set('endTime', moment(this.startTime).add(this.category.get('duration'), 'minutes').toDate());
    } else {
      this.set('endTime', moment(this.startTime).add(60, 'minutes').toDate());
    }
  })
});
