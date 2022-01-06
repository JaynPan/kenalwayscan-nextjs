import axios from 'axios';

import { API_URL } from '@/config/constants';

export default async function fetchPhotosData() {
  try {
    const res = await axios({
      url: `${API_URL}/wp-json/wp/v2/pages?slug=photos`,
      withCredentials: false,
    });

    return res.data[0]?.acf?.photos;
  } catch (e) {
    return [];
  }
}
