import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
  actions: {
    openModal: function(name, id) {
      var elementId = name + '-' + id;

      $('.ui.' + name + '.modal#' + elementId)
        .modal({ dimmerSettings: { opacity: 0.5 } })
        .modal('show');
    }
  }
});
