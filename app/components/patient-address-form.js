import Component from '@ember/component';

export default Component.extend({
  actions: {
    saveAddress() {
      this.model.save().then(function() {
        console.log('Address is saved, now time to redirect');
      });
    }
  }
});
