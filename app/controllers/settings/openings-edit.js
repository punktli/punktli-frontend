import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: ['day'],
  day: null,
  dayName: computed('day', function() {
    let name = 'Monday';
    if (this.day === "2") {
      name = 'Tuesday';
    } else if (this.day === "3") {
      name = 'Wednesday';
    } else if (this.day === "4") {
      name = 'Thursday';
    } else if (this.day === "5") {
      name = 'Friday';
    } else if (this.day === "6") {
      name = 'Saturday';
    } else if (this.day === "7") {
      name = 'Sunday';
    }

    return name;
  }),
  filteredOpenings: computed('day', 'model', function() {
    let day = this.day;
    let openings = this.model;

    if (day) {
      return openings.filterBy('day', day);
    } else {
      return openings;
    }
  })
});
