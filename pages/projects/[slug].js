/* eslint-disable react/no-array-index-key */
import { getProject, getAllProjectsWithSlug } from '@/lib/api/project';
import styled from 'styled-components';
import Link from 'next/link';

import {
 BLEND_MODE, pageMargin, pageHorizentalMargin, LANDSCAPE_TABLET, PORTRAIT_MOBILE, SMALL_LAPTOP,
} from '@/config/styles';
import Logo from '@/components/Logo';
import SlideShow from '@/components/SlideShow';
import Footer from '@/components/Footer';
import RichEdit from '@/components/RichEdit';
import ArrowRight from '@/components/ArrowRight';

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
  font-size: 16px;
  mix-blend-mode: ${BLEND_MODE};
  z-index: 100;

  @media (max-width: ${SMALL_LAPTOP}) {
    font-size: 13px;
  }
`;

const Back = styled.a`
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;

  .text {
    border-bottom: 1px solid;
  }

  .arrow-right-svg {
    fill: #fff;
  }


  @media (max-width: ${LANDSCAPE_TABLET}) {
    font-size: 13px;
  }
`;

const Content = styled.section`
  ${pageHorizentalMargin};
  padding-top: 100px;
  max-width: 1000px;

  @media (max-width: ${PORTRAIT_MOBILE}) {
    padding-top: 40px;
  }

  @media (min-width: 1200px) {
    margin: 0 auto;
  }
`;

const StyleArrowRight = styled(ArrowRight)`
  width: 14px;
  margin-right: 5px;
  
  

  @media (max-width: ${SMALL_LAPTOP}) {
    width: 10px;
  }
`;

// eslint-disable-next-line no-extend-native
String.prototype.splice = function strSplice(idx, rem, str) {
  return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

export default function Project({ data }) {
  const addClassToIframeParentTag = (str) => {
    const indexOfIframe = str.indexOf('<p><iframe');

    if (indexOfIframe !== -1) {
      const newStr = str.splice(indexOfIframe + 2, 0, ' class="iframe-wrapper"');
      return addClassToIframeParentTag(newStr);
    }

    return str;
  };

  return (
    <ProjectWrapper>
      <Nav>
        <Logo />
        <Link as="/projects" href="/projects">
          <Back href="/projects">
            <StyleArrowRight className="arrow" />
            <span className="text">BACK TO &quot;PROJECTS&quot;</span>
          </Back>
        </Link>
      </Nav>

      <Content>
        <div className="content">
          {data?.project?.acf?.content
              && data?.project?.acf?.content.map(({ editor, slider }, i) => {
                if (editor) {
                  const modifyEditorStr = addClassToIframeParentTag(editor);

                  return (
                    <RichEdit
                      key={`rich_edit_${i}`}
                      dangerouslySetInnerHTML={{ __html: modifyEditorStr }}
                    />
                  );
                }

                if (slider) {
                  return <SlideShow key={`slide_show_${i}`} data={slider} />;
                }

                return <></>;
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
