import DS from 'ember-data';
const { Model } = DS;
import { computed } from '@ember/object';
import { sort } from '@ember/object/computed';

export default Model.extend({
  openingsSorting: ['startTime:asc'],
  day: DS.attr(),
  company: DS.belongsTo(),
  openings: DS.hasMany(),
  sortedOpenings: sort('openings', 'openingsSorting'),
  dayName: computed('day', function() {
    let dayName = 'Sunday';
    if (this.day === 1) {
      dayName = 'Monday';
    } else if (this.day === 2) {
      dayName = 'Tuesday';
    } else if (this.day === 3) {
      dayName = 'Wednesday';
    } else if (this.day === 4) {
      dayName = 'Thursday';
    } else if (this.day === 5) {
      dayName = 'Friday';
    } else if (this.day === 6) {
      dayName = 'Saturday';
    }

    return dayName;
  })
});
