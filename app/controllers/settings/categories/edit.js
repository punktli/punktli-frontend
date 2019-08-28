import Controller from '@ember/controller';

export default Controller.extend({
  pageTitle: '',
  confirmArchiveModal: false,
  actions: {
    redirectToCategories() {
      this.transitionToRoute('settings.categories');
    },
    archiveCategory() {
      this.set('model.isArchived', true);
      this.model.save().then(() => {
        this.set('confirmArchiveModal', false);
        this.transitionToRoute('settings.categories');
      });
    }
  }
});
