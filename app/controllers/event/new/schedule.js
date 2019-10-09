import Controller from '@ember/controller';

export default Controller.extend({
  isError: false,
  startTime: null,
  endTime: null,
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
      this.transitionToRoute('event.new.wizard');
    },
    closeAlert() {
      this.hideError();
    }
  }
});
