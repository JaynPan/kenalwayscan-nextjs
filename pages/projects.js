import Head from 'next/head';
import uniqueId from 'uniqid';
import styled from 'styled-components';

import Layout from '@/components/Layout';
import ProjectItem from '@/components/ProjectItem';
import { PAGE_TITLE } from '@/config/constants';
import { getAllProjects } from '@/lib/api/project';

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -2rem 0 0 -2rem;
`;

const ItemWrapper = styled.div`
  margin: 2rem 0 0 2rem;
  width: calc(50% - 2rem);
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
