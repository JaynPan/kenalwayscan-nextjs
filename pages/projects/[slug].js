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

export async function getServerSideProps({ params }) {
  const data = await getProject(params.slug)

  return {
    props: {
      data
    },
  }
}
