import Component from '@ember/component';
import { computed } from '@ember/object';
import { sort } from '@ember/object/computed';

export default Component.extend({
  eventsSorting: null,
  eventsByDaySorting: null,
  eventsByDay: computed('eventsSorted.[]', function() {
    return this.events.reduce(function(groups, item) {
      const val = item['day']
      if (val) {
        groups[val] = groups[val] || []
        groups[val].push(item)
      }
      return groups
    }, {});
  }),
  eventsByDayArray: computed('eventsByDay', function() {
    const events = [];
    for (const day in this.eventsByDay) {
      events.push({
        day: day,
        events: this.eventsByDay[day]
      });
    }

    return events;
  }),
  eventsSorted: sort('events', 'eventsSorting'),
  eventsByDaySorted: sort('eventsByDayArray', 'eventsByDaySorting'),
  init() {
    this._super(...arguments);
    this.set('eventsSorting', ['startTime:asc']);
    this.set('eventsByDaySorting', ['day:asc']);
    console.log(this.events);
    console.log(this.eventsSorted);
    console.log(this.eventsByDay);
    console.log(this.eventsByDayArray);
    console.log(this.eventsByDaySorted);
  }
});
