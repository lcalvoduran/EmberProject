import { module, test } from 'qunit';
import { setupRenderingTest } from 'super-rentals/tests/helpers';
import { render, find, settled } from '@ember/test-helpers';
import { click } from '@ember/test-helpers';
import Service from '@ember/service';
import { hbs } from 'ember-cli-htmlbars';


module('Integration | Component | bookmarks', function (hooks) {
  setupRenderingTest(hooks);

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
  

  hooks.beforeEach(function () {
    bookmarkService = this.owner.lookup('service:bookmarks'); 
    localStorage.clear();
    //bookmarkService.filtrado("grand-old-mansion");
  });

  async function rendericeComponent() {
    return await render(hbs`<Bookmarks />`);
  }

  async function rendericeIDComponent() {
    return await render(hbs`<Bookmarks 
    @id="grand-old-mansion"/>`);  
  }

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


test('[Bookmarks (Services)]: it changes the status and saves it on BookmarkService when is clicked', async function (assert) {
    await rendericeIDComponent();     
    bookmarkService.set('saveBookmark', () => {
        assert.step('saveBookmark');        
      }      
    );
    await click('button');
    assert.dom('[selector="data-test"]').hasText('📕', 'El botón ahora tiene el valor: 📕');
    assert.verifySteps(['saveBookmark']);
  });  

test('[Bookmarks (Services)]: it loads and renders the initial status from BookmarkService', async function (assert) {

  bookmarkService.set('filtrado', () => {
    //window.localStorage.setItem("miLista", JSON.stringify(availableBookmarks));
    assert.step('filtrado');
    return true;  
  })  
  await rendericeIDComponent();
  assert.verifySteps(['filtrado']);
  assert.dom('[selector="data-test"]').hasText('📕', 'El botón ahora tiene el valor: 📕');
  });
});

/** 
1- mockeas datos y servicios
2- renderizas el componente
3- actuas sobre el componente (clicks, etc)
4- compruebas los assert

SI EN EL COMPONENTE USAS UN SERVICIO, MOCKEAS EL SERVICIO
EL MOCK REEMPLAZA AL MÉTODO POR COMPLETO PARA QUE HAGA LO QUE TU QUIERAS.
SI EN EL SERVICIO USAS LOCALSTORAGE, MOCKEAS LOCALSTORAGE

no tio, si tu mockeas el metodo filtrado(), da igual lo que hiciera por dentro, por que no lo va a hacer, el mock reemplaza el metodo por 
completo para que haga lo que tu quieras. Te lo repeti unas pocas veces
en el servicio no has mokceado el localStorage
simplemente lo has usado
y eso no vale para un test, siempre hay que usar mocks para cosas que son de fuera del test
tendrias que haber hecho como con el servicio en el test de integracion
en este caso seria window.localStorage.set('getItem' , () => ....
lo tienes apuntado en este mismo chat :)
**/


 