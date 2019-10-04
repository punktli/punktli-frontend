import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    selectPatient(patient) {
      this.model.set('patient', patient);
      if (this.model.category.get('name')) {
        this.get('model').set('name', patient.fullName + ' / ' + this.model.category.get('name'));
      } else {
        this.model.set('name', patient.fullName);
      }

      this.transitionToRoute('event.new.wizard');
    }
  }
});
