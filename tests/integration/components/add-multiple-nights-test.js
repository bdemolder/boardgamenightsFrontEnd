import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('add-multiple-nights', 'Integration | Component | add multiple nights', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{add-multiple-nights}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#add-multiple-nights}}
      template block text
    {{/add-multiple-nights}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
