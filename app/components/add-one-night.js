import Ember from 'ember';

export default Ember.Component.extend({
  model: {
    currentTimeStamp: Math.floor(Date.now() / 1000)
  }
});
