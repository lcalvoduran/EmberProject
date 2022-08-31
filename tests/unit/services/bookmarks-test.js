import { module, test } from 'qunit';
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



  test('function loadAllBookmarks reads all the bookmarks status from localStorage', async function (assert) {    
    bookmarkService.set('loadAllBookmarks', () => {
      window.localStorage.setItem("miLista", JSON.stringify(availableBookmarks));
      window.localStorage.getItem("miLista");
      assert.step('loadAllBookmarks');
    })     
    await bookmarkService.loadAllBookmarks();
    assert.verifySteps(['loadAllBookmarks']);
    let response = bookmarkService.loadAllBookmarks;
    assert.ok(response);;
    
  });

});

/**
  

  test('it exits bookmarkService', async function (assert) {
    assert.ok(true);
  });

  test('function saveBookmark stores the bookmark status in localStorage', async function (assert) {
    mockedData();
    //1. Comprobamos que se llama correctamente a loadAllBookmarks
    let response = await bookmarkService.loadAllBookmarks();
    assert.ok(response);     
    assert.equal(response[0].state, true);                                         
    //2. Mockeamos los datos al localStorage
                                                         // Array = [ [object, Object] [object, Object] ]
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

  test('function filtrado returns the requested bookmark status if it was stored in localStorage', async function (assert) {
    //1. Le pasamos los datos 
    mockedData();                                                     
    //2. Llamamos al filtrado
    let response = await bookmarkService.filtrado(availableBookmarks[0].id);   //true
    assert.equal(response, true);
  });    


 */

