import { module, skip, test } from 'qunit';
import { setupTest } from 'super-rentals/tests/helpers';
import Ember from 'ember';
import { set } from '@ember/object';
import { settled } from '@ember/test-helpers';

module('Unit | Service | bookmarks', function (hooks) {
  setupTest(hooks);

  let bookmarkService;
  let store = {};

  hooks.beforeEach((function () {
    bookmarkService = this.owner.lookup('service:bookmarks');
    
  }));

  //** ============= TESTS ============= **/
 

  test('function saveBookmark stores the bookmark status in localStorage', async function (assert) {
    //El método setItem coge 2 parámetros "key" y "value". La "key" se usa para hacer el fetch del dato después. 
    localStorage.setItem = function () {
      assert.step('setItem');
      let key = "miLista";
      let value = '[{"id": "test-id", "state": true}]';
      store[key] = value;      
      console.log(store);

    }         
    await bookmarkService.saveBookmark("test-id", true);  
    assert.verifySteps(['setItem']);                          
  });


/*   
  test('it exits bookmarkService', async function (assert) {
    assert.ok(true);
  }); 

  test('function saveBookmark stores the bookmark status in localStorage', async function (assert) {
    //El método setItem coge 2 parámetros "key" y "value". La "key" se usa para hacer el fetch del dato después. 
     localStorage.setItem = function (key, value) {
      assert.step('setItem'); 
      key = "miLista";
      value = "manolito grifota";
    }         
    await bookmarkService.saveBookmark("test-id", true);  
    assert.verifySteps(['setItem']);                          
  });
 

  test('function filtrado returns the requested bookmark status if it was stored in localStorage', async function (assert) {
    localStorage.getItem = () => {           
      return '[{"id": "test-id", "state": true}]'
    }
    //TENGO QUE DEJAR ESTO ASÍ. Porque nada más cargar la página no me va a leer nada con el loadAllBookmarks (Porque no hay NADA). Sin embargo
    //cuando llega el test tiene que meterlo en localStorage, loadAllBookmarks SÍ USA localStorage, filtrado NO.
    await bookmarkService.loadAllBookmarks(); 
    let response = await bookmarkService.filtrado("test-id");    
    assert.equal(response, true);
  }); 

  test('function loadAllBookmarks reads all the bookmarks status from localStorage', async function (assert) {
    
    localStorage.getItem = () => {
      assert.step('getItem');           
      return '[{"id": "test-id", "state": true}]'
    }
    let response = await bookmarkService.loadAllBookmarks();
    assert.verifySteps(['getItem', 'getItem']);
    assert.ok(response);
    assert.equal(response.length, 1);
    assert.equal(response[0].state, true);  
    assert.equal(response[0].id, "test-id");
  });   
  
  */


});

