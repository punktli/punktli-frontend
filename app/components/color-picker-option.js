import Component from '@ember/component';
import { computed } from '@ember/object'

export default Component.extend({
  // tagName: 'a',
  // attributeBindings: ['href'],
  // href: '#',
  classNames: ['color-picker-option', 'p-3', 'd-inline-block', 'rounded-circle'],
  classNameBindings: ['backgroundColor', 'status'],
  backgroundColor: computed('color', function() {
    return `bg-${this.color}`;
  }),
  colorValue: computed('color', function() {
    let selectedColor = '#FFFFF';
    if (this.color == 'primary') {
      selectedColor = '#4E7CF7';
    } else if (this.color == 'danger') {
      selectedColor = '#D60B0B';
    } else if (this.color == 'warning') {
      selectedColor = '#F7D64E';
    } else if (this.color == 'info') {
      selectedColor = '#17a2b8';
    } else if (this.color == 'success') {
      selectedColor = '#0BD695';
    } else if (this.color == 'purple') {
      selectedColor = '#87159B';
    }

    return selectedColor;
  }),
  status: computed('colorValue', 'selectedColor', function() {
    return (this.colorValue == this.selectedColor ? 'selected' : '');
  }),
  click() {
    this.get('onClick')(this.colorValue);
  }
});
