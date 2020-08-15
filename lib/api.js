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

export async function getMedia(mediaId) {
  try {
    const res = await axios.get(
      `${API_URL}/wp-json/wp/v2/media/${mediaId}`
    );

    return { 
      original: res.data.media_details.sizes.full.source_url,
      placeholder: res.data.media_details.sizes.medium.source_url
    }
  } catch(e) {
    return {
      original: '',
      placeholder: ''
    }
  }
}

export async function getProject(slug) {
  try {
    const res = await axios({
      url: `${API_URL}/wp-json/wp/v2/projects?slug=${slug}`
    })
    const media = await getMedia(res.data[0].featured_media);

    return { project: res.data[0], media };
  } catch(e) {
    return { project: [], media }
  }
}

export async function getAllProjectsWithSlug() {
  try {
    const projects = await getAllPostsForHome();
    const slugs =  projects.map(({ slug }) => slug);

    return slugs;
  } catch(e) {
    console.log(e);
  }
}