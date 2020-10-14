import Head from 'next/head';
import styled from 'styled-components';
import uniqid from 'uniqid';

import Layout from '@/components/Layout';
import RichEdit from '@/components/RichEdit';
import { PAGE_TITLE } from '@/config/constants';
import fetchAboutData from '@/lib/api/about';
import { PORTRAIT_TABLET } from '@/config/styles';

const AboutWrapper = styled.div`
  line-height: 1.5em;
  text-transform: uppercase;
  display: flex;

  @media (max-width: ${PORTRAIT_TABLET}) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  text-transform: uppercase;
`;

const Paragraph = styled.div`
  line-height: 2rem;
  text-transform: uppercase;
`;

const Info = styled.div`
  flex-basis: 700px;
  margin-right: 100px;

  @media (max-width: ${PORTRAIT_TABLET}) {
    margin-top: 50px;
    margin-right: 0;
  }
`;

const Section = styled.section`
  padding: 50px 0;
  border-bottom: 1px solid #C4C4C4;

  &:last-child {
    border-bottom: none;
  }
`;

const Introduction = styled.section`
  padding-bottom: 50px;
  border-bottom: 1px solid #C4C4C4;
`;

const Contact = styled.div`
  &.mobile {
    display: none;
  }
  &.laptop {
    display: block;
  }

  @media (max-width: ${PORTRAIT_TABLET}) {
    &.mobile {
      display: block;
      padding: 50px 0;
      border-bottom: 1px solid #C4C4C4;
    }
    &.laptop {
      display: none;
    }
  }

  h3 {
    margin-top: 0;
  }

  li {
    list-style: none;
    line-height: 2.5;
    font-weight: 500;
  }
`;

export default function about({ data }) {
  return (
    <>
      <Head>
        <title>{`About | ${PAGE_TITLE}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout footerPosition="relative">
        <AboutWrapper>
          <Info>
            <Introduction>
              <RichEdit dangerouslySetInnerHTML={{ __html: data?.acf?.introduction }} />
            </Introduction>
            <Contact className="mobile">
              <h3>Contact</h3>
              <p>{data?.acf?.email}</p>
              <p>{data?.acf?.phone}</p>
              <ul>
                {data?.acf?.social_media && data?.acf?.social_media.map(({ name, url }) => (
                  <li key={name}>
                    <a href={url}>{name}</a>
                  </li>
              ))}
              </ul>
            </Contact>
            {data?.acf?.post && data?.acf?.post.map(({ title, paragraph }) => (
              <Section key={uniqid()}>
                <Title>{title}</Title>
                <Paragraph dangerouslySetInnerHTML={{ __html: paragraph }} />
              </Section>
            ))}
          </Info>
          <Contact className="laptop">
            <h3>Contact</h3>
            <p>{data?.acf?.email}</p>
            <p>{data?.acf?.phone}</p>
            <ul>
              {data?.acf?.social_media && data?.acf?.social_media.map(({ name, url }) => (
                <li key={name}>
                  <a href={url}>{name}</a>
                </li>
              ))}
            </ul>
          </Contact>
        </AboutWrapper>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetchAboutData();

  return {
    props: { data },
    revalidate: 10,
  };
}
