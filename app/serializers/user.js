import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  serialize(snapshot, options) {
    let json = this._super(...arguments);

    json.user = json;

    return json;
  },
});
