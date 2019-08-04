import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | event/new/category', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:event/new/category');
    assert.ok(controller);
  });
});
