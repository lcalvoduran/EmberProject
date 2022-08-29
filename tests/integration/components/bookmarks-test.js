import { module, test } from 'qunit';
import { setupRenderingTest } from 'super-rentals/tests/helpers';
import { render, find, settled } from '@ember/test-helpers';
import { click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';


module('Integration | Component | bookmarks', function (hooks) {
  setupRenderingTest(hooks);

  let bookmarkService;
  let bookmarkFiltrado;
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
  

  hooks.beforeEach(function () {
    bookmarkService = this.owner.lookup('service:bookmarks'); 
    window.localStorage.setItem("miLista", JSON.stringify(availableBookmarks));
    bookmarkFiltrado = this.owner.register('service:bookmarks', bookmarkService.filtrado("grand-old-mansion"));
  });

  async function rendericeComponent() {
    return await render(hbs`<Bookmarks />`);
  }

  async function rendericeMockedComponent() {
    return await render(hbs`<Bookmarks 
    @id="urban-living"/>`);  
  }

/**
  test('[Bookmarks]: It renders the button with type', async function (assert) {
    await render(hbs`<Bookmarks test-button/>`);
    const button = assert.dom('[test-button]');
    button.hasText('📗');
    button.hasClass('imagebutton');

  });
  test('[Bookmarks]: It renders a bookmark with parameters', async function (assert) {
    await render(hbs`<Bookmarks
    @id = "grand-old-mansion"
    />`);
    assert
      .dom('.bookmarks button')
      .exists()
      .hasAttribute('id', 'grand-old-mansion');    
  });  

// ===================== ICON CHANGES ON CLICK ===================== 

test('[Bookmarks UDPATE ICON]: Icon changes the value when clicked', async function (assert) {
  await render(hbs`<Bookmarks />`);
  await click('button'); 
  const boton = assert.dom('[selector="data-test"]');         //Modificación reciente para el uso de selectores colocado en nuestro .hbs
  boton.hasText('📕', 'El button ahora tiene el valor 📕');
  await click('button'); 
  boton.hasText('📗', 'El button ahora tiene el valor 📗');
 
});



// ===================== Testing Services  =====================  //https://guides.emberjs.com/v2.1.0/testing/testing-components/
                                                                  //https://guides.emberjs.com/v2.3.0/tutorial/service/                                                                       


test('[Bookmarks (Services)]: Ember services filtrado has been called and button changed', async function (assert) { 
  localStorage.clear();
  await render(hbs`<Bookmarks 
                    @id="grand-old-mansion"/>`);  
  assert.dom('[selector="data-test"]').hasText('📗', 'El botón ahora tiene el valor: 📗');
  bookmarkService.set('filtrado', () => {
    assert.step('filtrado');
    localStorage.setItem("miLista", JSON.stringify(availableBookmarks));
    return true;
  }      
  );  
  await render(hbs`<Bookmarks 
                    @id="grand-old-mansion"/>`);  
  assert.dom('[selector="data-test"]').hasText('📕', 'El botón ahora tiene el valor: 📕');
  assert.verifySteps(['filtrado']);
  localStorage.clear();
});  


test('[Bookmarks (Services)]: function saveBookmark stores the bookmark status in localStorage', async function (assert) {
    await rendericeComponent();     
    bookmarkService.set('saveBookmark', () => {
        assert.step('saveBookmark');        
      }      
    );
    await click('button');
    assert.dom('[selector="data-test"]').hasText('📕', 'El botón ahora tiene el valor: 📕');
    assert.verifySteps(['saveBookmark']);
  });  


test('[Bookmarks (Services)]: Function loadAllBookmarks reads all the bookmarks status from localStorage', async function (assert) {
  assert.ok(true);
  
});  

 */



/** 
1- mockeas datos y servicios
2- renderizas el componente
3- actuas sobre el componente (clicks, etc)
4- compruebas los assert
**/

test('[Bookmarks (Services)]: Function filtrado returns the requested bookmark status if it was stored in localStorage', async function (assert) {
  //1. Mockeamos datos (arriba) y servicios (arriba)
    
  await rendericeMockedComponent();

  assert.dom('[selector="data-test"]').hasText('📕', 'El botón ahora tiene el valor: 📕');
  
});  


});
