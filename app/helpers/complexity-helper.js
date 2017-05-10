import Ember from 'ember';

export function complexityHelper(params/*, hash*/) {
  switch(params[0]) {
    case 1: return "Light - ideal for absolute beginners";
    case 2: return "Light to Medium - still great for absolute beginners";
    case 3: return "Medium - gamers or beginners who love a challenge";
    case 4: return "Medium to Heavy - seasoned gamers";
    case 5: return "Heavy - only recommended for hard core gamers";
  }
  return params;
}

export default Ember.Helper.helper(complexityHelper);
