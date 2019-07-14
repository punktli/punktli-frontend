import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  isError: false,
  actions: {
    login() {
      const _this = this;
      let { email, password } = this.getProperties('email', 'password');

      this.get('session').authenticate('authenticator:punktli', {"email": email, "password": password}).then(() => {
        _this.transitionToRoute('calendar');
      }).catch((reason) => {
        this.set('isError', true);
        this.set('errorMessage', reason.error || reason);
      });
    },
    resetError() {
      this.set('isError', false);
    }
  }
});
