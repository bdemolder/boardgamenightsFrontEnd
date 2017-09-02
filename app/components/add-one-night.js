import Ember from 'ember';

export default Ember.Component.extend({
  model: {
  },
  actions: {
    approveModal: function () {
      return true;
    },
    denyModal: function () {
      return true;
    }
  }
});
