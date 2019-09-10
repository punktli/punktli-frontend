import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    selectPatient(patient) {
      this.model.set('patient', patient);
      this.model.set('name', patient.get('fullName'));
      this.transitionToRoute('event.new.wizard');
    }
  }
});
