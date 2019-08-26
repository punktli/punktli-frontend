import Component from '@ember/component';

export default Component.extend({
  classNames: ['d-flex', 'justify-content-between'],
  selectedColor: '',
  click() {
    alert('click on the picker');
  }
});
