import axios from 'axios'

const API_URL = process.env.WORDPRESS_API_URL;

export async function getAllPostsForHome(preview) {
  try {
    const res = await axios({
      url: `${API_URL}/wp-json/wp/v2/projects`
    })

    return res?.data
  } catch(e) {
    console.log(e)
  }
}