import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | event/new/category', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:event/new/category');
    assert.ok(route);
  });
});
