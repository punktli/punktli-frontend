import Component from '@ember/component';
import fetch from 'fetch';
import ENV from 'punktli-frontend/config/environment';
import moment from 'moment';

export default Component.extend({
  countries: null,
  timezones: null,
  host: ENV.APP.apiHostname,
  selectedCountry: null,
  init() {
    this._super(...arguments);
    this.getAllCountries();
    this.timezones = moment.tz.names();
  },
  getAllCountries() {
    return fetch(`${this.host}/countries`).then(response => {
      return response.json()
    }).then((countriesObject) => {
      const countriesList = [];
      for (let [key, value] of Object.entries(countriesObject)) {
        countriesList.push({
          'id': key,
          'name': value
        })
      }
      this.set('countries', countriesList);
      this.set('selectedCountry', countriesList.find( country => country.id === this.model.countryIso));
    });
  },
  actions: {
    saveRegionalSettings() {
      this.model.save();
    },
    changeCountry(country) {
      this.model.set('countryIso', country.id);
      this.set('selectedCountry', country);
    }
  }
});
