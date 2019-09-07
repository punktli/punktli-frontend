import DS from 'ember-data';
const { Model } = DS;
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  content: validator('content', true),
});

export default Model.extend(Validations, {
  content: DS.attr(),
  createdAt: DS.attr(),
  updatedAt: DS.attr(),
  patient: DS.belongsTo()
});
