import Ember from 'ember';

export function newsColor(params/*, hash*/) {
  var value = params[0];
  switch (value) {
    case 'boardgamenight': return "bgn-boardgamenight-top";
    case 'news': return "bgn-news-top";
    case 'website': return "bgn-website-top";
  }
}

export default Ember.Helper.helper(newsColor);
