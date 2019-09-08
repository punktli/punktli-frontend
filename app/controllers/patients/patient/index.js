import Controller from '@ember/controller';
import { filterBy } from '@ember/object/computed';

export default Controller.extend({
  confirmArchiveModal: false,
  activeNotes: filterBy('model.notes', 'isArchived', false),
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
