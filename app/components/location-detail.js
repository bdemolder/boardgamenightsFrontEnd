import Ember from 'ember';

export default Ember.Component.extend({
  gMap: Ember.inject.service(),
  marker: '',
  actions: {
    gmapLoaded: function() {
      var location = this.attrs["location"].value;
      var geocoder = new google.maps.Geocoder();
      var gMapObject = this.get('gMap');
      var gmapId = "gmap-" + location.id;
      var mapObject = gMapObject.maps.select(gmapId);

      function geocodeAddress(geocoder, resultsMap, callBack) {
        var address = location.city + ', ' + location.street;
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location
            });
            var bounds = resultsMap.getBounds();
            resultsMap.fitBounds(bounds);
            callBack(marker);
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }

      if (mapObject && mapObject.map) {
        var self = this;
        var callBack = function (marker) {
          self.set('marker', marker);
        };

        mapObject.map.setOptions({ minZoom: 9, maxZoom: 15 });
        mapObject.map.addListener('zoom_changed', function() {
          var marker = self.get('marker');
          if (marker) {
            mapObject.map.setCenter(marker.position);
          }
        });
        geocodeAddress(geocoder, mapObject.map, callBack);
      }
    }
  }
});
