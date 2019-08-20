import Component from '@ember/component';
import { computed } from '@ember/object';
import moment from 'moment';

export default Component.extend({
  classNames: ['form-group'],
  formattedTime: computed('value', {
    get(key) {
      return moment(this.value).format('HH:mm');
    },
    set(key, value) {
      return value;
    }
  }),
  actions: {
    saveTime() {
      this.set("value", moment('2000-01-01 ' + this.formattedTime));
      this.focusOut(this.model, this.property, this.value);
    }
  }
});
