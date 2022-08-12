import { module, test } from 'qunit';
import { setupRenderingTest } from 'super-rentals/tests/helpers';
import { render } from '@ember/test-helpers';
import { waitFor, waitUntil} from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | bookmarks', function (hooks) {
  setupRenderingTest(hooks);

  test('[Bookmarks]: It renders the button with type', async function (assert) {
    // Comprobaremos que el componente se renderiza, y que ese componente que posee un botón también se renderiza correctamente.
    await render(hbs`<Bookmarks />`);
    assert.dom(this.element).hasText('📗');
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

/** ===================== U P D A T E    T E S T S =====================  **/

test('[Bookmarks UDPATE]: It renders a bookmark with parameters', async function (assert) {
  await render(hbs`<Bookmarks
  @id = "grand-old-mansion"
  />`);
  let { id } = find('.bookmarks'); //El find es un helper para encontrar elementos en el DOM
  console.log("Results: " + id);
  await waitFor('[id="grand-old-mansion"]');
  assert.dom('[id="grand-old-mansion"]').exists({ count: 1 });   

  let finder = find('.bookmarks');
  console.log("El finder lo ha encontrado: " + finder);
  await this.pauseTest();
}); 

});
