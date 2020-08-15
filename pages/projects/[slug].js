import React from 'react'

import { getProject, getAllProjectsWithSlug } from '../../lib/api';

export default function Project({ data }) {
  return (
    <div>
      <h2>{data?.project?.title?.rendered}</h2>
      <img src={data?.media?.original} alt="project banner" />
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