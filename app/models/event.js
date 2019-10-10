import DS from 'ember-data';
const { Model } = DS;
import { computed, observer } from '@ember/object';
import moment from 'moment';

import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  endTime: validator('later-than', {
    name: validator('presence', true),
    dependentKeys: ['model.startTime']
  })
});

export default Model.extend(Validations, {
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
  categoryChanged: observer('category.duration', function() {
    console.log('category changed');
    this.set('endTime', moment(this.startTime).add(this.category.get('duration'), 'minutes').toDate());
  }),
  startTimeChanged: observer('startTime', function() {
    console.log('startTimeChanged');
    if (this.category.get('duration')) {
      this.set('endTime', moment(this.startTime).add(this.category.get('duration'), 'minutes').toDate());
    } else {
      this.set('endTime', moment(this.startTime).add(60, 'minutes').toDate());
    }
  }),
  isDateValidated: false
});
