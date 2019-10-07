import DS from 'ember-data';
const { Model } = DS;
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  endTime: validator('later-than', {
    dependentKeys: ['model.startTime']
  })
});

export default Model.extend(Validations, {
  startTime: DS.attr(),
  endTime: DS.attr(),
  openingDay: DS.belongsTo()
});
