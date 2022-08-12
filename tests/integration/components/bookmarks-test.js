import { module, test } from 'qunit';
import { setupRenderingTest } from 'super-rentals/tests/helpers';
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

test('[Bookmarks UDPATE]: Icon click', async function (assert) {

  await render(hbs`<Bookmarks test-button/>`);
  const button = assert.dom('[test-button]');

  let myAction = function() {
    assert.step('button clicked');
  };
  await click('button'); // Lo convierte en 📕
  const boton = assert.dom('[test-button]');
  boton.hasText('📕', 'El boton ahora tiene el valor 📕');
  assert.verifySteps([]);
  this.set('myAction', myAction);
  await click('button'); // Le pasamos otro click para que no se queje el de arriba
  boton.hasText('📗', 'El boton ahora tiene el valor 📗');
  //await this.pauseTest();
 
}); 

});
