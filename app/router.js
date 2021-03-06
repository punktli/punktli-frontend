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
  });
  this.route('settings', function() {
    this.route('categories');
    this.route('openings');
    this.route('openings-edit');
  });
  this.route('directory');
});

export default Router;
