const key = '17612485-8bb53cdbeec1d9d4515dc9d2c';
export default {
  baseUrl: 'https://pixabay.com/api/?image_type=photo&orientation=horizontal',
  page: 1,
  perPage: 12,
  inputValue: '',
  searchImg(inputValue) {
    return fetch(
      `${this.baseUrl}&q=${inputValue}&page=${this.page}&per_page=${this.perPage}&key=${key}`,
    ).then(response => {
      return response.json();
    });
  },

  addPageValue() {
    this.page += 1;
  },
};
