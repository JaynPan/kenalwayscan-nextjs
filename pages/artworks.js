import Head from 'next/head';
import styled from 'styled-components';

import Layout from '@/components/Layout';
import { PAGE_TITLE } from '@/config/constants';

const GRID_COLUMNS = 12;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -1rem 0 0 -1rem;
`;

const Grid = styled.div`
  margin: 1rem 0 0 1rem;
  width: ${(props) => `calc(${(props.theme.grid / GRID_COLUMNS) * 100}% - 1rem`});
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

Grid.defaultProps = {
  theme: {
    grid: 1,
  },
};

export default function Artworks() {
  return (
    <>
      <Head>
        <title>{`Artworks | ${PAGE_TITLE}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Container>
          <Grid theme={{ grid: 6 }}>
            <img src="/image-1.jpg" alt="img" />
            <Info>
              <p>KENALWAYSCAN PROJECTS</p>
              <p>2020</p>
            </Info>
          </Grid>
          <Grid theme={{ grid: 6 }}>
            <img src="/image-2.jpg" alt="img" />
          </Grid>
          <Grid theme={{ grid: 4 }}>
            <img src="/image-2.jpg" alt="img" />
          </Grid>
          <Grid theme={{ grid: 4 }}>
            <img src="/image-1.jpg" alt="img" />
          </Grid>
          <Grid theme={{ grid: 4 }}>
            <img src="/image-1.jpg" alt="img" />
          </Grid>
        </Container>
      </Layout>
    </>
  );
}
