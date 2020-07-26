import refs from './refs';
import apiService from './apiService';
import * as basicLightbox from 'basiclightbox';
export function clear() {
  refs.searchForm.elements.query.value = '';
  refs.gallery.innerHTML = '';
  refs.clearBtn.classList.add('hiden');
  refs.btnLoadMore.classList.add('hiden');
  apiService.page = 1;
}

export function loadMore() {
  refs.btnLoadMore.innerHTML = 'Загружаю';
}

// export function showBigImg() {
//   const instance = basicLightbox.create(`
//   <h1>Dynamic Content</h1>
//   <p>You can set the content of the lightbox with JS.</p>
//  `);
//   return instance.show(() => {
//     console.log('lightbox now visible');
//   });
// }
