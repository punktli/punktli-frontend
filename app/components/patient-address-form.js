import Component from '@ember/component';
import fetch from 'fetch';
import ENV from 'punktli-frontend/config/environment';

export default Component.extend({
  countries: null,
  host: ENV.APP.apiHostname,
  selectedCountry: null,
  init() {
    this._super(...arguments);
    this.getAllCountries();
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
    save() {
      const _this = this;
      this.model.save().then(function() {
        _this.onSave();
      });
    },
    changeCountry(country) {
      this.model.set('countryIso', country.id);
      this.set('selectedCountry', country);
    }
  }
});
