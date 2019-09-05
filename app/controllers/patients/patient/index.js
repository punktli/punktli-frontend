import Controller from '@ember/controller';

export default Controller.extend({
  confirmArchiveModal: false,
  actions: {
    archivePatient() {
      this.model.set('isArchived', true);
      this.model.save().then(() => {
        this.set('confirmArchiveModal', false);
        this.transitionToRoute('patients');
      });
    }
  }
});
