import Component from '@ember/component';
import { filterBy } from '@ember/object/computed';

export default Component.extend({
  classNames: ['list-group', 'list-group-flush'],
  activePatients: filterBy('patients', 'isArchived', false)
});
