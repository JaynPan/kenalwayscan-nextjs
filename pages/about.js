import Head from 'next/head';
import styled from 'styled-components';

import Layout from '@/components/Layout';
import { PAGE_TITLE } from '@/config/constants';

const AboutWrapper = styled.main`
  min-height: 100vh;
  background-color: #fff;
  padding: 141px 110px;
  display: flex;
  line-height: 1.5em;
  text-transform: uppercase;
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
  h3 {
    margin-top: 0;
  }

  li {
    list-style: none;
    line-height: 2.5;
    font-weight: 500;
  }
`;

export default function about() {
  const dummyParagraph = `Paper City<br />for ZeroDotZero, i.c.w.<br /><br />
  Maloe Brinkman Temporary Art Centre,<br />Eindhoven Dutch Design Week (2019)<br />
  Part of YA Present! Sectie-C/Club-C,<br />Eindhoven Dutch Design Week (2018)<br /><br />
  ARTY PARTY de Melkweg, Amsterdam (2018)<br />
  Transition Showroom OPA, Arnhem (2016)'`;

  return (
    <>
      <Head>
        <title>{`About | ${PAGE_TITLE}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <AboutWrapper>
          <Info>
            <Introduction>
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Introduction>
            <Section>
              <Title>EXHIBITIONS</Title>
              <Paragraph dangerouslySetInnerHTML={{ __html: dummyParagraph }} />
            </Section>
            <Section>
              <Title>EXHIBITIONS</Title>
              <Paragraph dangerouslySetInnerHTML={{ __html: dummyParagraph }} />
            </Section>
          </Info>
          <Contact>
            <h3>Contact</h3>
            <p>akenz5393@gmail.com</p>
            <p>+886 963533124</p>
            <ul>
              <li>
                <a href="instagram">Instagram</a>
              </li>
              <li>
                <a href="instagram">Facebook</a>
              </li>
              <li>
                <a href="instagram">Facebook</a>
              </li>
              <li>
                <a href="instagram">Facebook</a>
              </li>
            </ul>
          </Contact>
        </AboutWrapper>
      </Layout>
    </>
  );
}
