import DS from 'ember-data';
const { Model } = DS;
import { validator, buildValidations } from 'ember-cp-validations';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';

const Validations = buildValidations({
  name: validator('presence', true),
  duration: [
    validator('presence', true),
    validator('number', {
      allowString: true,
      integer: true,
      gt: 0,
      lte: 720,
    })
  ]
});

export default Model.extend(Validations, {
  name: DS.attr(),
  color: DS.attr(),
  duration: DS.attr(),
  isArchived: DS.attr(),
  colorCssStyle: computed('color', function() {
    return htmlSafe("background-color: " + this.color);
  })
});
