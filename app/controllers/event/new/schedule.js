import Controller from '@ember/controller';

export default Controller.extend({
  isError: false,
  defaultStartTime: null,
  defaultEndTime: null,
  displayError(reason) {
    this.set('isError', true);
    this.set('errorMessage', reason.errors.full_messages[0] || reason);
    setTimeout(() => { this.hideError(); }, 3000);
  },
  hideError() {
    this.set('isError', false);
  },
  setTime(field, date) {
    this.get('model').set(field, date);
  },
  actions: {
    saveEvent() {
      this.transitionToRoute('event.new.wizard');
    },
    setStartTime(datetime) {
      this.setTime('startTime', datetime[0]);
    },
    setEndTime(datetime) {
      this.setTime('endTime', datetime[0]);
    },
    closeAlert() {
      this.hideError();
    }
  }
});
