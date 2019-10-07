import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { all } from 'rsvp';
import moment from 'moment';

export default Controller.extend({
  queryParams: ['day'],
  day: null,
  isError: false,
  isWorkingDay: computed('model.openings.[]', {
    get(key) {
      return this.model.openings.length > 0;
    },
    set(key, value) {
      return value;
    }
  }),
  invalidOpenings: computed('model.openings.@each.{startTime,endTime}', function() {
    return this.model.openings.filter(function(element) {
      return !element.validations.isValid;
    });
  }),
  displayError(reasons) {
    this.set('isError', true);

    //Transform all reasons into a cleaner string
    const errorMessages = Object.entries(reasons).map(reason => {
      const field = reason[0].replace(/^\w/, c => c.toUpperCase());
      return `${field} ${reason[1]}.`;
    });

    this.set('errors', errorMessages);
    setTimeout(() => { this.set('isError', false); }, 3000);
  },
  actions: {
    saveTimeInModel(obj, property, newTime) {
      obj.set(property, newTime);
    },
    initNewSlot() {
      let startTime, endTime;

      //Defines the new time for the new slot, depeding if there're slots in the day or not
      if (this.model.openings.get('lastObject')) {
        startTime = moment(this.model.openings.get('lastObject').get('endTime')).add(1, 'hours');
        endTime = moment(this.model.openings.get('lastObject').get('endTime')).add(2, 'hours');
      } else {
        startTime = moment('2000-01-01 08:00');
        endTime = moment('2000-01-01 12:00');
      }

      this.store.createRecord('opening', {
        startTime: startTime,
        endTime: endTime,
        openingDay: this.model
      });
    },
    deleteSlot(op) {
      op.destroyRecord();
    },
    saveOpenings() {
      const promises = [];
      const _this = this;
      this.model.openings.forEach((op) => {
        if (!this.isWorkingDay) {
          op.deleteRecord();
        }

        promises.push(op.save());
      });
      all(promises).then(() => {
        _this.model.save().then(() => {
          this.transitionToRoute('settings.openings');
        })
      }).catch((errors) => {
        this.displayError(errors);
      });
    }
  }
});
