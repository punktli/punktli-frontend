import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | openings/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:openings/edit');
    assert.ok(route);
  });
});
