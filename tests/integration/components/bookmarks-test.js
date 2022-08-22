import { module, test } from 'qunit';
import { setupRenderingTest } from 'super-rentals/tests/helpers';
//import BookmarkService from 'app/services/bookmark';
import { render } from '@ember/test-helpers';
import { click } from '@ember/test-helpers';
import { waitFor, waitUntil} from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';


module('Integration | Component | bookmarks', function (hooks) {
  setupRenderingTest(hooks);


  test('[Bookmarks]: It renders the button with type', async function (assert) {
    // Comprobaremos que el componente se renderiza, y que ese componente que posee un botón también se renderiza correctamente.
    await render(hbs`<Bookmarks />`);
    assert.dom(this.element).hasText('📗'); // Necesario para cuando haga el click () en vez de poner el 📗 📕
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
      .hasAttribute('id')
      .hasAttribute('id', 'grand-old-mansion');    
      await waitFor('button', { count: 1});  //Comprobamos que se ha creado al menos un botón
      assert.dom('[id="grand-old-mansion"]').exists({ count: 1 }); 
  });  

/** ===================== ICON CHANGES ON CLICK =====================  **/

test('[Bookmarks UDPATE ICON]: Icon click', async function (assert) {

  await render(hbs`<Bookmarks test-button/>`);
  const button = assert.dom('[test-button]');
  let { variable } = find('.button'); //El find es un helper para encontrar elementos en el DOM
  console.log("La variable CON FIND: "+ variable);  
  await click('button'); // Lo convierte en 📕
  const boton = assert.dom('[test-button]');
  boton.hasText('📕', 'El button ahora tiene el valor 📕');
  await click('button'); // Le pasamos otro click para que no se queje el de arriba
  boton.hasText('📗', 'El button ahora tiene el valor 📗');
 
}); 

/** ===================== Others  =====================  **/

test('[Bookmarks (Others)]: Disabling Bookmark', async function (assert) {
  
  await render(hbs`<Bookmarks
  @id = "grand-old-mansion"
  disabled=true
  data-test-bookmarks/>`);
  const bookmark = assert.dom('[data-test-bookmarks]');
  bookmark.hasAttribute('disabled');  
  assert.ok(true, "El attribute disabled está habilitado");
  assert.dom('.bookmarks button').exists();

});  

test('[Bookmarks (Others)]: WaitFor', async function (assert) {
  
  await render(hbs`<Bookmarks
  @id = "grand-old-mansion"
  data-test-bookmarks2/>`);
  const bookmark2 = assert.dom('[data-test-bookmarks2]');
  assert.dom('.bookmarks button').exists();
  console.log("La variable " + bookmark2);
  await waitFor('[id="grand-old-mansion"]');
});  

/** ===================== Stub Ember Services  =====================  **/ //https://guides.emberjs.com/v2.1.0/testing/testing-components/
                                                                          //https://guides.emberjs.com/v2.3.0/tutorial/service/

/* En nuestro caso, tenemos que el component bookmarks hace uso de unos servicios en concreto. Para ello es posible hacer un stub de estas
dependencias (un stub de un método es un trozo de código utilizando para sustituir alguna otra funcionalidad). Para ello utiliza la función
incorporada de registro para registrar el servicio en un lugar predeterminado.  */ 
test('[Bookmarks (Services)]: Stub Ember Services for Bookmarks', async function (assert) {
  
  await render(hbs`<Bookmarks
  @id = "grand-old-mansion"
  />`);
  assert.ok(true);

}); 
});
