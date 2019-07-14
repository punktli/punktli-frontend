import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  extractErrors(store, typeClass, payload, id) {
    console.log('extract errors');
    console.log(typeClass);
    console.log(payload);
    if (payload && typeof payload === 'object' && payload._problems) {
      payload = payload._problems;
      this.normalizeErrors(typeClass, payload);
    }
    return payload;
  }
});
