import DS from 'ember-data';
const { Model } = DS;
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  fullName: validator('presence', true),
  companyName: validator('presence', true),
  email: [
    validator('presence', true),
    validator('format', { type: 'email' })
  ],
  password: [
    validator('presence', true),
    validator('length', {
      min: 6
    })
  ]
});

export default Model.extend(Validations, {
  fullName: DS.attr(),
  email: DS.attr(),
  password: DS.attr(),
  companyName: DS.attr(),
  timezone: DS.attr(),
  company: DS.belongsTo()
});
