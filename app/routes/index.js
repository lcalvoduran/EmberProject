import Route from '@ember/routing/route';
const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];
export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('../api/rentals.json');
    let parsed = await response.json();
    console.log(parsed);
    return parsed;
  }
}
