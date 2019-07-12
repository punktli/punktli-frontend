import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNameBindings: ['hide:d-none'],
  show: true,
  hide: computed('show', function() {
    return !this.show;
  })
});
