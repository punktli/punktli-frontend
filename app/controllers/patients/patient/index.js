import Controller from '@ember/controller';

export default Controller.extend({
  confirmArchiveModal: false,
  actions: {
    archivePatient() {
      this.model.isArchive = true;
      this.model.save().then(() => {
        this.transitionToRoute('patients');
      });
    }
  }
});
