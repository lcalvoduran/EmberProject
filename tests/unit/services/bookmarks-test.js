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

  let bookmarkService;
  const availableBookmarks = [
    {
      "id": "grand-old-mansion",
      "state": true
    },
    {
      "id": "urban-living",
      "state": true
    }    
  ];    

  hooks.beforeEach((function () {
    bookmarkService = this.owner.lookup('service:bookmarks');
  }));


  //** ============= TESTS ============= **/

  test('it exits bookmarkService', function (assert) {
    assert.ok(bookmarkService);
  });

  test('it exits bookmarkService', function (assert) {
    assert.ok(bookmarkService);
  });

    //Como el de arriba, hay que probar que los métodos en sí funcionen, que el loadAllBookmarks acceda al localstorage 
    //(ojo hay que guardarse cositas antes en el localstorage para comprobar el test)
});
