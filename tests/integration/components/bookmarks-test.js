import { module, test } from 'qunit';
import { setupRenderingTest } from 'super-rentals/tests/helpers';
//import BookmarkService from 'app/services/bookmark';
import { render, find } from '@ember/test-helpers';
import { click } from '@ember/test-helpers';
import { waitFor, waitUntil} from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';


module('Integration | Component | bookmarks', function (hooks) {
  setupRenderingTest(hooks);


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

/** ===================== ICON CHANGES ON CLICK =====================  **/

test('[Bookmarks UDPATE ICON]: Icon changes the value when clicked', async function (assert) {
  await render(hbs`<Bookmarks />`);
  await click('button'); 
  const boton = assert.dom('[selector="data-test"]');         //Modificación reciente para el uso de selectores colocado en nuestro .hbs
  boton.hasText('📕', 'El button ahora tiene el valor 📕');
  await click('button'); 
  boton.hasText('📗', 'El button ahora tiene el valor 📗');
 
}); 



/** ===================== Testing Services  =====================  **/ //https://guides.emberjs.com/v2.1.0/testing/testing-components/
                                                                          //https://guides.emberjs.com/v2.3.0/tutorial/service/

test('[Bookmarks (Services)]: Ember services saveBookmark has been called', async function (assert) {
  
  await render(hbs`<Bookmarks
  @id = "grand-old-mansion"
  />`);
  const bookmarkService = this.owner.lookup('service:bookmarks'); //Buscamos el servicio bookmarks
  assert.step('saveBookmark');
  bookmarkService.set('saveBookmark', () =>{      
    return Promise.resolve({
        argID: 'data-test'
      })      
    })
    assert.verifySteps(['saveBookmark']);
  }); 
  
});

/*   bookmarkService.saveBookmark = () => {                          //Hacemos uso del método "saveBookmark"
    assert.step('saveBookmark');
  }
  assert.verifySteps([]); */


