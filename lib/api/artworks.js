import axios from 'axios';

import { API_URL } from '@/config/constants';

export default async function fetchArtworksData() {
  try {
    const res = await axios({
      url: `${API_URL}/wp-json/wp/v2/pages?slug=artworks`,
      withCredentials: false,
    });

    return res.data[0]?.acf?.artwork;
  } catch (e) {
    return [];
  }
}
