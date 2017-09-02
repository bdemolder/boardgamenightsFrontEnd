import Ember from 'ember';

export default Ember.Component.extend({
  newBoardGameNights: Ember.A(),
  actions: {
    addNight: function () {
      var boardGameNights = this.get('newBoardGameNights');
      boardGameNights.pushObject({
        date: new Date(),
        boardGame: {
          name: '',
          weight: 1
        },
        filling: {
          available: 2,
          max: 5
        }
      });
    },
    removeNight: function (night) {
      var boardGameNights = this.get('newBoardGameNights');
      boardGameNights.removeObject(night);
    },
    approveModal: function () {
      return true;
    },
    denyModal: function () {
      return true;
    }
  }
});
