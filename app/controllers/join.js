import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  company: null,
  isError: false,
  displayError(reason) {
    this.set('isError', true);
    console.log(reason);
    this.set('errorMessage', ((reason.errors) ? reason.errors[0] : reason));
    setTimeout(() => { this.hideError(); }, 3000);
  },
  hideError() {
    this.set('isError', false);
  },
  actions: {
    createAccountAndUser() {
      const _this = this;

      //Saves the name of the company
      this.get('company').set('name', this.get('model').get('companyName'));
      this.get('company').save().then((comp) => {

        //Assign the company to the user
        _this.get('model').set('company', comp);

        //Creates the user
        console.log('saves the user now');
        _this.get('model').save().then((user) => {
          _this.get('session').authenticate('authenticator:punktli', {"email": user.get('email'), "password": user.get('password')}).then(() => {
            _this.transitionToRoute('calendar');
          }).catch((reason) => {
            _this.displayError('There was an error when we tried to log you in. Try to log in from the <a href="/login">Login page</a>.');
          });
        }).catch((reason) => {
          _this.displayError('There was an error when creating your user. This email is already taken. Please select another one or go to the <a href="/login">Login page</a>.');
        });
      }).catch((reason) => {
        _this.set('isError', true);
        _this.set('errorMessage', 'This company name is already taken, please select another one');
        setTimeout(() => { _this.hideError(); }, 3000);
      });
    },
    closeAlert() {
      this.hideError();
    }
  }
});
