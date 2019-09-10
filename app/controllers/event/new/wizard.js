import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: ['patientId'],
  patientId: null,
  isButtonDisabled: computed('model.patient', 'model.category', 'model.startTime', function() {
    return !(this.model.patient && this.model.category && this.model.startTime);
  }),
  actions: {
    saveEvent() {
      this.model.save().then(() => {
        this.transitionToRoute('calendar');
      })
    }
  }
});
