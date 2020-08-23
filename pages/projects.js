import Head from 'next/head';

import Layout from '@/components/Layout';
import { PAGE_TITLE } from '@/config/constants';

export default function Project() {
  return (
    <>
      <Head>
        <title>{`Project | ${PAGE_TITLE}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        project
      </Layout>
    </>
  );
}
