import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        title: 'News Bulletin 3',
        type: 'boardgamenight',
        date: new Date(2017, 5, 11, 19, 42, 0),
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        tags: [ 'news', 'weather' ]
      },
          {
        title: 'News Bulletin 2',
        type: 'website',
        date: new Date(2017, 5, 10, 19, 42, 0),
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        tags: [ 'boardgame' ]
      },
      {
        title: 'News Bulletin 1',
        type: 'news',
        date: new Date(2017, 5, 9, 19, 42, 0),
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        tags: [ 'website', 'functionality' ]
      }
    ]
  }
});
