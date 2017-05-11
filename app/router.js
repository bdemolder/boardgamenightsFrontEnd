import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('calendar');
  this.route('home', { path: '/' });
  this.route('user-nights');
});

export default Router;
