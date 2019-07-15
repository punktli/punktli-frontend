import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    selectPatient(patient) {
      this.get('model').set('patient', patient);
      this.get('model').set('name', patient.get('fullName'));
      this.transitionToRoute('event.new.wizard');
    }
  }
});
