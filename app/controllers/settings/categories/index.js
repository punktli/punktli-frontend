import Controller from '@ember/controller';
import { filterBy } from '@ember/object/computed';

export default Controller.extend({
  activeCategories: filterBy('model', 'isArchived', false)
});
