import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';
// import 'scroll-behavior-polyfill';

import fetchHomeData from '@/lib/api/home';
import { PAGE_TITLE } from '@/config/constants';
import { LANDSCAPE_TABLET, PORTRAIT_TABLET } from '@/config/styles';
import Layout from '@/components/Layout';

// (async () => {
//   if (!('scrollBehavior' in document.documentElement.style)) {
//     await import('scroll-behavior-polyfill');
//   }
// })();

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
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100vh;
  position: relative;

  /* Scroll Snap */
  scroll-snap-align: center;
  scroll-snap-stop: always;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  white-space: pre-wrap;
  width: 70%;
  z-index: 2;

  @media (max-width: ${LANDSCAPE_TABLET}) {
    font-size: 2rem;
  }
  @media (max-width: ${PORTRAIT_TABLET}) {
    font-size: 1.5rem;
  }
`;

const Video = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export default function Home({ data }) {
  const sliders = data?.acf?.slider || [];

  return (
    <>
      <Head>
        <title>{`Home | ${PAGE_TITLE}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout absolute showCopyright={false}>
        <HomeWrapper scroll-behavior="smooth">
          <main>
            <Section>
              <iframe
                title="canvas"
                src="https://openprocessing.org/sketch/1134735/embed/"
                width="100%"
                height="100%"
              />
            </Section>
            {sliders.length > 0
            && sliders.map(({
              image, description, link, video,
            }) => {
              const slug = link.indexOf('projects/');
              const linkToProject = slug !== -1 ? link.slice(slug) : '#';

              return (
                <Link
                  key={image.id}
                  as={`/${linkToProject}`}
                  href={`/${linkToProject}`}
                >
                  <Section
                    style={{
                        background: `url('${image.url}') no-repeat center center/cover`,
                      }}
                  >
                    {video && (
                      <Video autoPlay muted loop playsInline>
                        <source src={video} type="video/mp4" />
                      </Video>
                    )}
                    <Title>{description}</Title>
                  </Section>
                </Link>
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
