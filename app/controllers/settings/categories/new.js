import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    redirectToCategories() {
      this.transitionToRoute('settings.categories');
    }
  }
});
