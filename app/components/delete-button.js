import Component from '@ember/component';

export default Component.extend({
  tagName: 'a',
  attributeBindings: ['href'],
  href: '#',
  click() {
    this.onClick();
  }
});
