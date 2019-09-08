import Controller from '@ember/controller';

export default Controller.extend({
  confirmArchiveModal: false,
  actions: {
    redirectToPatient() {
      this.transitionToRoute('patients.patient', this.model.patient);
    },
    archiveNote() {
      this.set('model.isArchived', true);
      this.model.save().then(() => {
        this.set('confirmArchiveModal', false);
        this.transitionToRoute('patients.patient', this.model.patient);
      });
    }
  }
});
