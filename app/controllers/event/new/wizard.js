import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: ['patientId'],
  patientId: null,
  isButtonDisabled: computed('model.patient.fullName', 'model.category.duration', 'model.startTime', 'model.isDateValidated', function() {
    return !(this.model.patient.get('fullName') && this.model.category.get('duration') && this.model.startTime && this.model.isDateValidated);
  }),
  actions: {
    saveEvent() {
      this.model.save().then(() => {
        this.transitionToRoute('calendar');
      })
    }
  }
});
