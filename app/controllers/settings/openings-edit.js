import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { all } from 'rsvp';

export default Controller.extend({
  currentUser: service('current-user'),
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
    let day = parseInt(this.day);
    let openings = this.model;

    if (day) {
      return openings.filterBy('day', day);
    } else {
      return openings;
    }
  }),
  actions: {
    saveTimeInModel(obj, property, newTime) {
      obj.set(property, newTime);
    },
    initNewSlot() {
      this.store.createRecord('opening', {
        day: parseInt(this.day),
        startTime: '2001.01.01 00:00',
        endTime: '2001.01.01 01:00',
        company: this.currentUser.company
      })
    },
    saveOpenings() {
      const promises = [];
      this.filteredOpenings.forEach((op) => {
        promises.push(op.save());
      });
      all(promises).then(() => {
        this.transitionToRoute('settings.openings');
      });
    }
  }
});
