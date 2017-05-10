import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  gMap: Ember.inject.service(),
  actions: {
    openModal: function(name, id) {
      var gMapObject = this.get('gMap');
      var elementId = name + '-' + id;

      $('.ui.' + name + '.modal#' + elementId)
      .modal({
        dimmerSettings: { opacity: 0.5 },
        onVisible: function () {
          if (name === "location") {
            var mapObject = gMapObject.maps.select("gmap-" + id);
            if (mapObject && mapObject.map) {
              var map = mapObject.map;
              var center = map.getCenter();
              google.maps.event.trigger(map, 'resize');
              map.setCenter(center); 
            }
          }
        }
      })
      .modal('show');
    }
  }
});
