import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | event/new-patient', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:event/new-patient');
    assert.ok(controller);
  });
});