import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        date: new Date(2017, 5, 20),
        boardGame: "Blood Rage",
        organisator: "Benjamin",
        location: "Merelbeke",
        weight: 3,
        filling: {
          current: 1,
          max: 4
        }
      },
      {
        date: new Date(2017, 5, 22),
        boardGame: "Terra Mystica",
        organisator: "Benjamin",
        location: "Gent",
        weight: 3,
        filling: {
          current: 3,
          max: 4
        }
      },
      {
        date: new Date(2017, 5, 23),
        boardGame: "Vast - The Crystal Carverns",
        organisator: "Benjamin",
        location: "De Pinte",
        weight: 3,
        filling: {
          current: 4,
          max: 4
        }
      }
    ];
  }
});
