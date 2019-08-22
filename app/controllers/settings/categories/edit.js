import Controller from '@ember/controller';

export default Controller.extend({
  pageTitle: '',
  actions: {
    saveCategory() {
      const _this = this;
      this.model.save().then(function() {
        _this.transitionToRoute('settings.categories');
      })
    }
  }
});