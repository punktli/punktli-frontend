import Component from '@ember/component';

export default Component.extend({
  actions: {
    save() {
      const _this = this;
      this.model.save().then(function() {
        _this.onSave();
      });
    }
  }
});
