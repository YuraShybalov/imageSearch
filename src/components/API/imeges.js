import axios from 'axios';

const API_KEY = '37020257-50f9bd55f20927cb154e79678';

// 'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';

axios.defaults.baseURL = 'https://pixabay.com/api/';

async function fetchImg(searchValue, page) {
  try {
    const { data } = await axios.get('?', {
      params: {
        key: API_KEY,
        q: searchValue,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
        page: page,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}
export { fetchImg };
