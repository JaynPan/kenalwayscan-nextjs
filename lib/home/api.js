import axios from 'axios';

import { API_URL } from '@/config/constants';

export default async function fetchHomeData() {
  try {
    const res = await axios({
      url: `${API_URL}/wp-json/wp/v2/pages?slug=home`,
    });

    return res.data[0];
  } catch (e) {
    return {};
  }
}
