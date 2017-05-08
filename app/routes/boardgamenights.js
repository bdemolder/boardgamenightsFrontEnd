import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        date: new Date(2017, 5, 20),
        boardGame: "Blood Rage",
        organisator: {
          id: '99e201ef-3c17-4d8d-a84b-89b26fafe48d',
          fullName: "Benjamin Demolder",
          intro: "Kitties! Kitties! Kitties!",
          age: 29
        },
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
        organisator: {
          id: '747516a1-3673-4c6d-ba9f-d77743dd7969',
          fullName: "Fake Name",
          intro: "Kitties! Kitties! Kitties! 2",
          age: 30
        },
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
        organisator: {
          id: 'f36fcaf7-29cf-441a-89bd-e8f1f0ccb73a',
          fullName: "Faker Name",
          intro: "Kitties! Kitties! Kitties! 3",
          age: 31
        },
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
