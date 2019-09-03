import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    redirectToPatient() {
      this.transitionToRoute('patients.patient', this.model);
    }
  }
});
