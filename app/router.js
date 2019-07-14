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
    this.route('new');
    this.route('details', {path: '/:event_id'});
  });
  this.route('login');
  this.route('logout');
  this.route('patients');
});

export default Router;
