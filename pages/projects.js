import Head from 'next/head';
import uniqueId from 'uniqid';
import styled from 'styled-components';

import Layout from '@/components/Layout';
import ProjectItem from '@/components/ProjectItem';
import { PAGE_TITLE } from '@/config/constants';
import { PORTRAIT_TABLET } from '@/config/styles';
import { getAllProjects } from '@/lib/api/project';

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -2rem 0 0 -2rem;
`;

const ItemWrapper = styled.div`
  margin: 2rem 0 0 2rem;
  width: calc(50% - 2rem);

  @media (max-width: ${PORTRAIT_TABLET}) {
    width: 100%;
  }
`;

export default function Projects({ data }) {
  return (
    <>
      <Head>
        <title>{`Projects | ${PAGE_TITLE}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ProjectsWrapper>
          <ItemWrapper>
            <ProjectItem
              title="Welcome aboard 2.0"
              date="2021"
              image={{ original: '/flight-project.jpg', placeholder: '/flight-project.jpg' }}
              slug="flight"
            />
          </ItemWrapper>
          {data.map(({
            slug, date, title, image,
          }) => (
            <ItemWrapper key={uniqueId()}>
              <ProjectItem
                title={title}
                date={date}
                image={image}
                slug={slug}
              />
            </ItemWrapper>
          ))}
        </ProjectsWrapper>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const data = await getAllProjects();
  return {
    props: { data },
    revalidate: 10,
  };
}
