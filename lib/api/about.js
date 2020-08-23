import axios from 'axios';

import { API_URL } from '@/config/constants';

export default async function fetchAboutData() {
  try {
    const res = await axios({
      url: `${API_URL}/wp-json/wp/v2/pages?slug=about`,
    });

    return res.data[0];
  } catch (e) {
    return {};
  }
}
