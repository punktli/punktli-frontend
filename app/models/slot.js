import DS from 'ember-data';
const { Model } = DS;
import { computed } from '@ember/object';
import moment from 'moment';

export default Model.extend({
  startTime: DS.attr('date'),
  endTime: DS.attr('date'),
  company: DS.belongsTo()
});
