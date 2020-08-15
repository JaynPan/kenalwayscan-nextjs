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
      {allPosts.map(({title, excerpt}) => {
        return (
          <div>
            <h3>{title.rendered}</h3>
            <p dangerouslySetInnerHTML={{__html: excerpt.rendered}}></p>
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