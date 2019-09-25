import Component from '@ember/component';
import { computed } from '@ember/object';
import { sort } from '@ember/object/computed';

export default Component.extend({
  eventsByDaySorting: null,
  eventsByDay: computed('events.[]', function() {
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
        events: this.eventsByDay[day].sort(function(a, b) {
          if (a.startTime < b.startTime)
            return -1;
          if (a.startTime > b.startTime)
            return 1;
          // a doit être égal à b
          return 0;
        })
      });
    }

    return events;
  }),
  //eventsSorted: sort('events', 'eventsSorting'),
  eventsByDaySorted: sort('eventsByDayArray', 'eventsByDaySorting'),
  init() {
    this._super(...arguments);
    this.set('eventsByDaySorting', ['day:asc']);
  }
});
