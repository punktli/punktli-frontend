import Component from '@ember/component';
import { computed } from '@ember/object';
import moment from 'moment';

export default Component.extend({
  classNames: ['form-group'],
  formattedDate: computed('value', {
    get(key) {
      return moment(this.value).format('YYYY-MM-DD');
    },
    set(key, value) {
      return value;
    }
  }),
  formattedTime: computed('value', {
    get(key) {
      return moment(this.value).format('HH:mm');
    },
    set(key, value) {
      return value;
    }
  }),
  init() {
    this._super(...arguments);

    if (!this.inputId) {
      this.set('inputId', 'datetime-' + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1))
    }
  },
  actions: {
    saveTime() {
      this.set("value", moment(this.formattedDate + ' ' + this.formattedTime).toDate());
      this.get('onChange')(this.value);
    }
  }
});
