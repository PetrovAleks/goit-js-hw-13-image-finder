import './styles.css';
import refs from './scripts/refs';
import apiService from './scripts/apiService';
import markup from './scripts/markup';

refs.searchForm.addEventListener('submit', search);

function search(event) {
  event.preventDefault();

  const inputValue = event.currentTarget.elements.query.value;

  searchImg(inputValue);
}

function searchImg(inputValue) {
  apiService.searchImg(inputValue).then(data => {
    console.log(data);
    return markup(data.hits);
  });
}
