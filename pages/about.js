import Head from 'next/head';
import styled from 'styled-components';

import Layout from '@/components/Layout';
import { TITLE } from '@/config/constants';

const AboutWrapper = styled.main`
  min-height: 100vh;
  background-color: #fff;
`;

export default function about() {
  return (
    <>
      <Head>
        <title>{`About | ${TITLE}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <AboutWrapper>
          about
        </AboutWrapper>
      </Layout>
    </>
  );
}
