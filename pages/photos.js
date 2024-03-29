import Head from 'next/head';
import styled from 'styled-components';

import Layout from '@/components/Layout';
import SlideShow from '@/components/SlideShow';
import { RatioWrapper, RatioInnerStyle } from '@/components/RatioWrapper';
import { PAGE_TITLE } from '@/config/constants';
import fetchPhotosData from '@/lib/api/photos';
import { PORTRAIT_TABLET } from '@/config/styles';

const GRID_COLUMNS = 16;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -1rem 0 0 -1rem;
`;

const Grid = styled.div`
  margin: 1rem 0 0 1rem;
  width: ${({ theme }) => `calc(${(theme.grid / GRID_COLUMNS) * 100}% - 1rem)`};

  @media (max-width: ${PORTRAIT_TABLET}) {
    width: 100%;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Video = styled.video`
  object-fit: contain;
  object-position: top;
  height: auto;
`;

const Img = styled.img`
  ${RatioInnerStyle}
`;

Grid.defaultProps = {
  theme: {
    grid: 1,
  },
};

export default function Photos({ data }) {
  return (
    <>
      {/* <Head>
        <title>{`Photos | ${PAGE_TITLE}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Container>
          {data.length > 0 && data.map(({
            title, date, grid, content,
            }) => {
            const { slide, video, photo } = content;

            return (
              <Grid theme={{ grid: Number(grid) }} key={title}>
                {slide && <SlideShow data={slide} />}
                {video && (
                  <Video
                    autoPlay
                    muted
                    controls
                    loop
                    width="100%"
                    height="100%"
                    src={video.url}
                  >
                    <track
                      default
                      kind="captions"
                      srcLang="en"
                    />
                  </Video>
                )}
                {photo && (
                  <RatioWrapper ratio={(photo.height / photo.width) * 100}>
                    <Img
                      src={photo.url}
                      alt="img"
                      loading="lazy"
                    />
                  </RatioWrapper>
                )}
                <Info>
                  <p>{title}</p>
                  <p>{date}</p>
                </Info>
              </Grid>
            );
          })}
        </Container> */}
      {/* </Layout> */}
    </>
  );
}

// export async function getStaticProps() {
//   const data = await fetchPhotosData();

//   return {
//     props: { data },
//     revalidate: 10,
//   };
// }
