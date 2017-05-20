import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  actions: {
    openModal: function(name, id) {
      var elementId = '';
      if (id) {
        elementId = '#' + name + '-' + id;
      }

      $('.ui.' + name + '.modal' + elementId).modal('show');
    },
  }
});
