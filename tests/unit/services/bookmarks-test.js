import { module, skip, test } from 'qunit';
import { setupTest } from 'super-rentals/tests/helpers';
import Ember from 'ember';
import { set } from '@ember/object';
import { settled } from '@ember/test-helpers';

module('Unit | Service | bookmarks', function (hooks) {
  setupTest(hooks);

  let bookmarkService;


  hooks.beforeEach((function () {
    bookmarkService = this.owner.lookup('service:bookmarks');
    
  }));

  //** ============= TESTS ============= **/
 

  test('function saveBookmark stores the bookmark status in localStorage', async function (assert) {
  
     localStorage.setItem = function (key, val) {
      assert.step('setItem'); 
      this[key] = val;
    }         
    await bookmarkService.saveBookmark("test-id", true);  
    assert.verifySteps(['setItem']);                          
  });

/*   
  test('it exits bookmarkService', async function (assert) {
    assert.ok(true);
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

