import Controller from '@ember/controller';

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
    createEvent() {
      this.get('model').save().then((event) => {
        this.transitionToRoute('event.details', event);
      })
    },
    closeAlert() {
      this.hideError();
    }
  }
});
