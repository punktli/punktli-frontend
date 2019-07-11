import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  actions: {
    login() {
      let { email, password } = this.getProperties('email', 'password');
      console.log('Login');
      console.log('Email: ' + email);
      console.log('Password: ' + password);

      this.get('session').authenticate('authenticator:punktli', {"email": email, "password": password}).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
