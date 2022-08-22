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
    //Como el de arriba, hay que probar que los métodos en sí funcionen, que el loadallbookamrks acceda al localstorage 
    //(ojo hay que guardarse cositas antes en el localstorage para comprobar el test)
    assert.ok(response);
  });

});
