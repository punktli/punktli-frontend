import DS from 'ember-data';
const { Model } = DS;
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  fullName: validator('presence', true),
  email: [
    validator('format', { type: 'email' })
  ]
});

export default Model.extend(Validations, {
  fullName: DS.attr(),
  address: DS.attr(),
  address2: DS.attr(),
  zipCode: DS.attr(),
  locality: DS.attr(),
  countryIso: DS.attr(),
  email: DS.attr(),
  phone: DS.attr(),
  company: DS.belongsTo()
});
