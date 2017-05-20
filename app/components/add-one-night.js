import Ember from 'ember';

export default Ember.Component.extend({
  model: {
  },
  actions: {
    approveModal: function () {
      console.log('Approved! - Compo');
      return true;
    },
    denyModal: function (element, component) {
      console.log('Denied! - Compo');
      return true;
    }
  }
});
