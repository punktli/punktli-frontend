import Controller from '@ember/controller';
import { filterBy, sort } from '@ember/object/computed';

export default Controller.extend({
  confirmArchiveModal: false,
  sortNotesBy: ['updatedAt:desc'],
  activeNotes: filterBy('model.notes', 'isArchived', false),
  orderedNotes: sort('activeNotes', 'sortNotesBy'),
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
