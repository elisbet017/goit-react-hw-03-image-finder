import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '36706034-f5193b0f10336721a563577c8';

export default async function getImages(value, page) {
  try {
    const responce = await axios.get(
      `?q=${value}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return responce;
  } catch (error) {
    console.log(error)
  }
};

