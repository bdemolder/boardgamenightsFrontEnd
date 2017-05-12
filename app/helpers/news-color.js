import Ember from 'ember';

export function newsColor(params/*, hash*/) {
  var value = params[0];
  switch (value) {
    case 'boardgamenight': return "blue";
    case 'news': return "yellow";
    case 'website': return "red";
  }
}

export default Ember.Helper.helper(newsColor);
