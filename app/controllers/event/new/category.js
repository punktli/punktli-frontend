import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    selectCategory(category) {
      this.get('model').set('category', category);
      this.get('model').set('name', this.model.get('name') + ' / ' + category.get('name'));
      this.transitionToRoute('event.new.wizard');
    }
  }
});
