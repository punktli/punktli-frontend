import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  initials: computed('alt', function() {
      const names = this.alt.split(' ')
      let initials = names[0].substring(0, 1).toUpperCase();

      if (names.length > 1) {
          initials += names[names.length - 1].substring(0, 1).toUpperCase();
      }
      return initials;
  })
});
