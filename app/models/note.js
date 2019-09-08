import DS from 'ember-data';
const { Model } = DS;
import { validator, buildValidations } from 'ember-cp-validations';
import { computed } from '@ember/object';

const Validations = buildValidations({
  content: validator('presence', true),
});

export default Model.extend(Validations, {
  content: DS.attr(),
  isArchived: DS.attr(),
  createdAt: DS.attr(),
  updatedAt: DS.attr(),
  patient: DS.belongsTo(),
  contentSummarized: computed('content', function() {
    let contentSummarized = this.content;
    if (contentSummarized.length > 100) {
      contentSummarized = contentSummarized.substring(0, 100) + '...'
    }
    return contentSummarized;
  })
});
