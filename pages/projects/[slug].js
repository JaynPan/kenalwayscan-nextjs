import React from 'react'

import { getProject, getAllProjectsWithSlug } from '../../lib/api';

export default function Project({ data }) {
  const { project, media } = data;

  return (
    <div>
      <h2>{project?.title?.rendered}</h2>
      <img src={media?.original} alt="project banner" />
    </div>
  )
}

export async function getStaticProps({ params, preview = false}) {
  const data = await getProject(params.slug)

  return {
    props: {
      preview,
      data
    },
  }
}

export async function getStaticPaths() {
  const allSlugs = await getAllProjectsWithSlug()

  return {
    paths: allSlugs.map((slug) => `/projects/${slug}`) || [],
    fallback: true,
  }
}