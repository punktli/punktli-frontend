import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Validator | later-than', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    const validator = this.owner.lookup('validator:later-than');
    assert.ok(validator);
  });
});
