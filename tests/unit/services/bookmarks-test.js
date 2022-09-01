import { module, push, test } from 'qunit';
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


  test('it load the bookmarks results', async function (assert) {
    //1. Le pasamos los datos 
    mockedData();                                                     
    //2. Llamamos al loadAllBookmarks
    let response = await bookmarkService.loadAllBookmarks();          // Array = [ [object, Object] [object, Object] ]
    assert.ok(response);
    assert.equal(response.length, 2);                                 // la length debería de ser 2
    assert.equal(response[0].state, true);                            // el state debería estar a "true"
    assert.equal(response[0].id, availableBookmarks[0].id);           // true, los datos son los mismos
    assert.equal(response.length, availableBookmarks.length);         // true, los datos tienen el mismo length
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
 
  test('function loadAllBookmarks reads all the bookmarks status from localStorage', async function (assert) {
    localStorage.getItem = () => {
      assert.step('getItem');      
     
      return '[{"id": "grand-old-mansion", "state": true}]'
    }
    await bookmarkService.loadAllBookmarks();
    assert.verifySteps(['getItem', 'getItem']);
  });  


 /**
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
    let response = await bookmarkService.filtrado(testingID[0].id);
    assert.verifySteps(['getItem', 'getItem']);
    assert.ok(response, true);
  }); 

 */
 
});
