import { module, skip, test } from 'qunit';
import { setupTest } from 'super-rentals/tests/helpers';
import Ember from 'ember';
import { set } from '@ember/object';
import { settled } from '@ember/test-helpers';

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

  function mockedData(){
    localStorage.clear();
    localStorage.setItem("miLista", JSON.stringify(availableBookmarks));
  }

  //** ============= TESTS ============= **/
  //Como el de arriba, hay que probar que los métodos en sí funcionen, que el loadAllBookmarks acceda al localstorage 
  //(ojo hay que guardarse cositas antes en el localstorage para comprobar el test)

  //Añadido por mi: Sabemos que el método loadAllBookmarks nos devuelve un array, pues vamos a comprobar mockeando los datos podemos observar 
  //lo que nos va a ir devolviendo

  
  test('it exits bookmarkService', async function (assert) {
    assert.ok(true);
  });


  test('function saveBookmark stores the bookmark status in localStorage', async function (assert) {
  
    localStorage.setItem = () => {      
      assert.step('setItem');
      localStorage.miLista = '[{"id": "test-id", "state": true}]';
    }    
    await bookmarkService.saveBookmark();    
    assert.verifySteps(['setItem']);
    assert.ok(true);                          
  }); 

  test('function filtrado returns the requested bookmark status if it was stored in localStorage', async function (assert) {
  
    localStorage.setItem = () => {      
      assert.step('setItem');
      localStorage.miLista = '[{"id": "test-id", "state": true}]';
    }    
    await bookmarkService.saveBookmark();
    await bookmarkService.filtrado("test-id");    
    assert.verifySteps(['setItem']);
    assert.ok(true);                          
  });    

  test('function loadAllBookmarks reads all the bookmarks status from localStorage', async function (assert) {
    
    localStorage.getItem = () => {
      assert.step('getItem');           
      return '[{"id": "grand-old-mansion", "state": true}]'
    }
    let response = await bookmarkService.loadAllBookmarks();
    assert.verifySteps(['getItem', 'getItem']);
    assert.ok(response);
    assert.equal(response.length, 1);
    assert.equal(response[0].state, true);  
    assert.equal(response[0].id, "grand-old-mansion");
  });      
 
});


/*   
// TEST FUNCTION FILTRADO [OLD]

 test('function filtrado returns the requested bookmark status if it was stored in localStorage', async function (assert) {
    let testingID = [
      {
        "id": "test-id",
        "state": true
      }
    ];
    localStorage.getItem = () => {
      assert.step('getItem');
      return '[{"id": "test-id", "state": true}]'
    }
    await bookmarkService.loadAllBookmarks();
    assert.verifySteps(['getItem', 'getItem']);
    let response = await bookmarkService.filtrado(testingID[0].id);    
    assert.ok(response, true);
  });   
*/ 
