import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.modelFor('settings.openings');
  },
  setupController(controller, model) {
    this._super(controller, model);

    //Spread opening hours by day
    const monday = [],
    tuesday = [],
    wednesday = [],
    thursday = [],
    friday = [],
    saturday = [],
    sunday = [];

    model.forEach(opening => {
      if (opening.day === 1) {
        monday.push(opening);
      } else if (opening.day === 2) {
        tuesday.push(opening);
      } else if (opening.day === 3) {
        wednesday.push(opening);
      } else if (opening.day === 4) {
        thursday.push(opening);
      } else if (opening.day === 5) {
        friday.push(opening);
      } else if (opening.day === 6) {
        saturday.push(opening);
      } else if (opening.day === 7) {
        sunday.push(opening);
      }
    });

    controller.set('monday', monday);
    controller.set('tuesday', tuesday);
    controller.set('wednesday', wednesday);
    controller.set('thursday', thursday);
    controller.set('friday', friday);
    controller.set('saturday', saturday);
    controller.set('sunday', sunday);
  }
});
