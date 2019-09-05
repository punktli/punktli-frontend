import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | patients/patient/contact', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:patients/patient/contact');
    assert.ok(route);
  });
});
