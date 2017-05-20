import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  gMap: Ember.inject.service(),
  actions: {
    openModal: function(name, id) {
      var gMapObject = this.get('gMap');

      var elementId = '';
      if (id) {
        elementId = '#' + name + '-' + id;
      }

      $('.ui.' + name + '.modal' + elementId).modal('show');
    },
  }
});
