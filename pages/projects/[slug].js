import { getProject, getAllProjectsWithSlug } from '@/lib/api/project';
import styled from 'styled-components';
import Link from 'next/link';
import uniqeId from 'uniqid';

import { BLEND_MODE, pageMargin, pageHorizentalMargin } from '@/config/styles';
import Logo from '@/components/Logo';
import SlideShow from '@/components/SlideShow';
import Footer from '@/components/Footer';

const ProjectWrapper = styled.div`
  background-color: #fff;
`;

const Nav = styled.nav`
  ${pageMargin};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 18px;
  mix-blend-mode: ${BLEND_MODE};
  z-index: 100;
`;

const Banner = styled.section`
  height: 500px;
  position: relative;

  h2 {
    font-size: 36px;
    color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Content = styled.section`
  ${pageHorizentalMargin};
  padding-top: 100px;

  .title {
    font-size: 36px;
    padding-bottom: 20px;
    border-bottom: 1px solid #c4c4c4;
  }
`;

const RichEdit = styled.div`
  line-height: 1.5em;

  img {
    height: 100%;
  }
  strong {}
  blockquote {
    box-shadow: #c5d2d8 3px 0px 0px 0px inset;
    padding-left: 23px;
    font-style: italic;
    margin: 2em 0;
  }
  code {
    font-size: 0.875em;
    font-family: "Monaco", "Menlo", "Ubuntu Mono", "Consolas", "source-code-pro",
      monospace;
    border-radius: 3px;
    background: rgba(250, 166, 166, 0.3);
  }
`;

export default function Project({ data }) {
  const title = data?.project?.title?.rendered;

  return (
    <ProjectWrapper>
      <Nav>
        <Logo />
        <Link as="/projects" href="/projects">
          <a href="/projects">
            BACK TO &quot;PROJECTS&quot;
          </a>
        </Link>
      </Nav>
      <Banner
        style={{
          background: `url('${data?.media?.original}') no-repeat center center/cover`,
        }}
      >
        <h2>{title}</h2>
      </Banner>
      <Content>
        <h3 className="title">{title}</h3>
        <div className="content">
          {data?.project?.acf?.content
              && data?.project?.acf?.content.map(({ editor, slider }) => {
                if (editor) {
                  return (
                    <RichEdit
                      key={uniqeId()}
                      dangerouslySetInnerHTML={{ __html: editor }}
                    />
                  );
                } if (slider) {
                  return <SlideShow data={slider} key={uniqeId()} />;
                }

                return false;
              })}
        </div>
      </Content>
      <Footer showCopyright />
    </ProjectWrapper>
  );
}

export async function getStaticProps({ params }) {
  const data = await getProject(params.slug);

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const allSlugs = await getAllProjectsWithSlug();

  return {
    paths: allSlugs.map((slug) => `/projects/${slug}`) || [],
    fallback: true,
  };
}
