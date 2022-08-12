import { module, test } from 'qunit';
import { setupRenderingTest } from 'super-rentals/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | bookmarks', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the button with type', async function (assert) {
    // Comprobaremos que el componente se renderiza, y que ese componente que posee un botón también se renderiza correctamente.
    await render(hbs`<Bookmarks />`);

    assert.dom(this.element).hasText('📗');
    await render(hbs`<Bookmarks test-button/>`);
    await this.pauseTest();
    const button = assert.dom('[test-button]');
    button.hasText('📗')

    // Template block usage:
    await render(hbs`
      <Bookmarks>

      </Bookmarks>
    `);

    //assert.dom(this.element).hasText('template block text');
  });
});
