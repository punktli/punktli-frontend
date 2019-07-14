import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
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
