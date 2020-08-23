import Head from 'next/head';
import styled from 'styled-components';
import 'scroll-behavior-polyfill';

import fetchHomeData from '@/lib/api/home';
import { PAGE_TITLE } from '@/config/constants';
import Layout from '@/components/Layout';

const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;

  /* CSS Smooth Scroll */
  overflow-y: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  color: white;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100vh;

  /* Scroll Snap */
  scroll-snap-align: center;
  scroll-snap-stop: always;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  white-space: pre-wrap;
  width: 70%;
`;

export default function Home({ data }) {
  const sliders = data?.acf?.slider || [];

  return (
    <>
      <Head>
        <title>{`Home | ${PAGE_TITLE}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout footerPosition="absolute">
        <HomeWrapper scroll-behavior="smooth">
          <main>
            {sliders.length > 0
            && sliders.map(({ image, description }) => {
              const imageUrl = image.sizes['twentytwenty-fullscreen'];

              return (
                <Section
                  key={image.id}
                  style={{
                    background: `url('${imageUrl}') no-repeat center center/cover`,
                  }}
                >
                  <Title>{description}</Title>
                </Section>
              );
            })}
          </main>
        </HomeWrapper>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetchHomeData();

  return {
    props: { data },
    revalidate: 10,
  };
}
