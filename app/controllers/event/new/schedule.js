import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  isError: false,
  displayError(reason) {
    this.set('isError', true);
    this.set('errorMessage', reason.errors.full_messages[0] || reason);
    setTimeout(() => { this.hideError(); }, 3000);
  },
  hideError() {
    this.set('isError', false);
  },
  actions: {
    saveEvent() {
      this.model.set('isDateValidated', true);
      this.transitionToRoute('event.new.wizard');
    },
    closeAlert() {
      this.hideError();
    }
  }
});
