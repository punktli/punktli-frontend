import Controller from '@ember/controller';

export default Controller.extend({
  newCategory: null,
  isAddingCategory: false,
  actions: {
    saveCategory(category) {
      category.save();
    },
    openAddForm() {
      this.set('newCategory', this.get('store').createRecord('category'));
      this.set('isAddingCategory', true);
    }
  }
});
