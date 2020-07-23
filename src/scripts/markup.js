import template from '../teplates/teplates.hbs';
import refs from './refs';
import card from './apiService';
export default function markup(card) {
  refs.gallery.insertAdjacentHTML('beforeend', template(card));
}
