import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class BookmarksComponent extends Component {

    @tracked isLarge = false;
    @action toggleBookmark() {
      this.isLarge = !this.isLarge;
    }
}