import BaseValidator from 'ember-cp-validations/validators/base';
import moment from 'moment';

const LaterThan = BaseValidator.extend({
  validate(value, options, model, attribute) {
    return (moment(value).isAfter(model.startTime) ? true : 'End time must be later than start time');
  }
});

LaterThan.reopenClass({
  /**
   * Define attribute specific dependent keys for your validator
   *
   * [
   * 	`model.array.@each.${attribute}` --> Dependent is created on the model's context
   * 	`${attribute}.isValid` --> Dependent is created on the `model.validations.attrs` context
   * ]
   *
   * @param {String}  attribute   The attribute being evaluated
   * @param {Unknown} options     Options passed into your validator
   * @return {Array}
   */
  getDependentsFor(attribute, options) {
    return ['model.endTime'];
  }
});

export default LaterThan;
