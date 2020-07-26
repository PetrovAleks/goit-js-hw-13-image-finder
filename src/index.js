import './styles.css';
import refs from './scripts/refs';
import apiService from './scripts/apiService';
import markup from './scripts/markup';
import { clear, loadMore, showBigImg } from './scripts/scripts';

refs.searchForm.addEventListener('submit', search);
// refs.litebox.addEventListener('click', showBigImg);

function search(event) {
  event.preventDefault();

  apiService.searchQuery = event.currentTarget.elements.query.value;

  searchImg();
  refs.spinerForm.classList.remove('hiden');
  refs.clearBtn.addEventListener('click', clear);
  refs.btnLoadMore.addEventListener('click', () => {
    loadMore();
    searchImg();
  });
}

function searchImg() {
  apiService
    .searchImg(apiService.searchQuery)
    .then(data => {
      markup(data.hits);
      refs.clearBtn.classList.remove('hiden');
      refs.btnLoadMore.classList.remove('hiden');
      window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth',
      });
    })
    .finally(() => {
      refs.spinerForm.classList.add('hiden');
      refs.btnLoadMore.innerHTML = ' Показать еще 12';
    });

  apiService.addPageValue();
}
