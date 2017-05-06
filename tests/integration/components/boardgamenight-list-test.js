import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('boardgamenight-list', 'Integration | Component | boardgamenight list', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{boardgamenight-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#boardgamenight-list}}
      template block text
    {{/boardgamenight-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
