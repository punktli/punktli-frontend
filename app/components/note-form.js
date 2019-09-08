import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  flashMessages: inject(),
  actions: {
    save() {
      const _this = this;
      this.model.save().then(function() {
        _this.flashMessages.success('Your note is saved!');
        _this.onSave();
      });
    }
  }
});
