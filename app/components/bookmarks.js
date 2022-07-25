import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class BookmarksComponent extends Component {
  @tracked isLarge = false;
  @action toggleBookmark() {
    console.log("Hola has pulsado el botón");
    this.isLarge = !this.isLarge;
  }
}