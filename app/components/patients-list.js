import Component from '@ember/component';
import { filterBy } from '@ember/object/computed';
import patient from '../controllers/event/new/patient';

export default Component.extend({
  classNames: ['list-group', 'list-group-flush'],
  activePatients: filterBy('patients', 'isArchived', false),
  actions: {
    clickPatient(patient) {
      this.onSelect(patient);
    }
  }
});
