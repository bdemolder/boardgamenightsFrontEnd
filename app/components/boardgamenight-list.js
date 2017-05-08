import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    openModal: function(name, id) {
      $('.ui.' + name + '.modal#profile-' + id)
      .modal({ dimmerSettings: { opacity: 0.7 }})
      .modal('show');
    }
  }
});
