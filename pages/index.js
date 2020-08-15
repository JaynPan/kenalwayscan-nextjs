import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { getAllPostsForHome } from '../lib/api'

export default function Home({allPosts}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Next Mindset</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      {allPosts.map(({id, title, excerpt}) => {
        return (
          <div key={id}>
            <h3>{title.rendered}</h3>
            <div dangerouslySetInnerHTML={{__html: excerpt.rendered}} />
          </div>
        );
      })}
      </main>
    </div>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
  }
}