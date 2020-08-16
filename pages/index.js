import Head from 'next/head';
import styled from 'styled-components';

import fetchHomeData from '@/lib/home/api';
import { TITLE } from '@/config/constants';

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

export default function Home({ data }) {
  const sliders = data?.acf?.slider || [];

  return (
    <HomeWrapper>
      <Head>
        <title>{`Home | ${TITLE}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {sliders.length > 0
          && sliders.map(({ image }) => {
            const imageUrl = image.sizes.xxl;

            return (
              <Section
                style={{
                  background: `url('${imageUrl}') no-repeat center center/cover`,
                }}
              />
            );
          })}
      </main>
    </HomeWrapper>
  );
}

export async function getStaticProps() {
  const data = await fetchHomeData();

  return {
    props: { data },
    revalidate: 10,
  };
}
