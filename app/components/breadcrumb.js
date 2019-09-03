import Component from '@ember/component';

export default Component.extend({
  tagName: 'nav',
  classNames: ['d-none', 'd-lg-block'],
  attributeBindings: ['ariaLabel:aria-label'],
  ariaLabel: 'breadcrumb'
});
