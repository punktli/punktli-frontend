import Component from '@ember/component';

export default Component.extend({
  isError: false,
  displayError(reasons) {
    this.set('isError', true);

    //Transform all reasons into a cleaner string
    const errorMessages = Object.entries(reasons).map(reason => {
      const field = reason[0].replace(/^\w/, c => c.toUpperCase());
      return `${field} ${reason[1]}.`;
    });

    this.set('errors', errorMessages);
    setTimeout(() => { this.set('isError', false); }, 3000);
  },
  actions: {
    save() {
      const _this = this;
      this.model.save().then(function() {
        _this.onSaveSuccess();
      }).catch((errors) => {
        _this.displayError(errors);
      })
    }
  }
});
