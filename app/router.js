import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('join');
  this.route('calendar');
  this.route('event', { path: '/events' }, function() {
    this.route('new', function() {
      this.route('patient');
      this.route('wizard');
      this.route('schedule');
      this.route('category');
    });

    this.route('details', {path: '/:event_id'});
  });
  this.route('login');
  this.route('logout');
  this.route('patients', function() {
    this.route('new');
    this.route('patient', {path: '/:patient_id'}, function() {
      this.route('address');
      this.route('details');
      this.route('contact');
      this.route('notes', function() {
        this.route('new');
        this.route('edit', {path: '/:note_id'});
      });
    });
  });
  this.route('settings', function() {
    this.route('categories', function() {
      this.route('edit', { path: '/:category_id' });
      this.route('new');
    });
    this.route('openings', function() {
      this.route('edit', { path: '/:opening_day_id' });
    });
    this.route('regional');
  });
  this.route('directory');
});

export default Router;
