import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['returnURL'],
  returnURL: 'patients.patient',
  isError: false,
  displayError(reason) {
    this.set('isError', true);
    console.log(reason);
    this.set('errorMessage', reason.errors.full_messages[0] || reason);
    setTimeout(() => { this.hideError(); }, 3000);
  },
  hideError() {
    this.set('isError', false);
  },
  actions: {
    createPatient() {
      const returnURL = this.get('returnURL');
      this.get('model').save().then((patient) => {
        this.set('returnURL', 'patients.patient');
        if (returnURL == 'patients.patient') {
          this.transitionToRoute(returnURL, patient);
        } else {
          this.transitionToRoute(returnURL);
        }
      }).catch((reason) => {
        this.displayError(reason);
      });
    },
    closeAlert() {
      this.hideError();
    }
  }
});
