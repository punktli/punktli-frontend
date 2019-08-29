import DS from 'ember-data';
const { Model } = DS;
import { validator, buildValidations } from 'ember-cp-validations';
import { computed } from '@ember/object';

const Validations = buildValidations({
  fullName: validator('presence', true),
  email: [
    validator('presence', true),
    validator('format', { type: 'email' })
  ]
});

export default Model.extend(Validations, {
  fullName: DS.attr(),
  email: DS.attr(),
  countryIso: DS.attr(),
  company: DS.belongsTo()
});
