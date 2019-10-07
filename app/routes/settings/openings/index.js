import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.modelFor('settings.openings');
  },
  setupController(controller, model) {
    this._super(controller, model);

    //Spread opening hours by day
    let monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday;

    model.forEach(opening => {
      if (opening.day === 1) {
        monday = opening;
      } else if (opening.day === 2) {
        tuesday = opening;
      } else if (opening.day === 3) {
        wednesday = opening;
      } else if (opening.day === 4) {
        thursday = opening;
      } else if (opening.day === 5) {
        friday = opening;
      } else if (opening.day === 6) {
        saturday = opening;
      } else if (opening.day === 0) {
        sunday = opening;
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
