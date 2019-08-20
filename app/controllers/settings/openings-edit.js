import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { all } from 'rsvp';
import moment from 'moment';

export default Controller.extend({
  currentUser: service('current-user'),
  queryParams: ['day'],
  day: null,
  isWorkingDay: computed('filteredOpenings', {
    get(key) {
      return this.filteredOpenings.length > 0;
    },
    set(key, value) {
      return value;
    }
  }),
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
  filteredOpenings: computed('day', 'model.[]', function() {
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
      let startTime, endTime;

      //Defines the new time for the new slot, depeding if there're slots in the day or not
      if (this.filteredOpenings.get('lastObject')) {
        startTime = moment(this.filteredOpenings.get('lastObject').get('endTime')).add(1, 'hours');
        endTime = moment(this.filteredOpenings.get('lastObject').get('endTime')).add(2, 'hours');
      } else {
        startTime = moment('2000-01-01 08:00');
        endTime = moment('2000-01-01 12:00');
      }

      this.store.createRecord('opening', {
        day: parseInt(this.day),
        startTime: startTime,
        endTime: endTime,
        company: this.currentUser.company
      });
    },
    deleteSlot(op) {
      op.destroyRecord();
    },
    saveOpenings() {
      const promises = [];
      this.filteredOpenings.forEach((op) => {
        if (!this.isWorkingDay) {
          op.deleteRecord();
        }

        promises.push(op.save());
      });
      all(promises).then(() => {
        this.transitionToRoute('settings.openings');
      });
    }
  }
});
