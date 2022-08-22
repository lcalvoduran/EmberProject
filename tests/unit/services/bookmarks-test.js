import { module, test } from 'qunit';
import { setupTest } from 'super-rentals/tests/helpers';
import Ember from 'ember';

const DUMMY_ELEMENT = {};
let bookmarkUtilStub = Ember.Object.extend({
  loadAllBookmarks() {
    this.assert.ok('Element created');
    return DUMMY_ELEMENT;
  }
});

module('Unit | Service | bookmarks', function (hooks) {
  setupTest(hooks);


  test('it exists', function (assert) {
    let service = this.owner.lookup('service:bookmarks');
    assert.ok(service);
  });

  test('it creates loadBookmarks', function (assert) {
    const response = BookmarksService.loadAllBookmarks();
    assert.ok(response);
  });

});
