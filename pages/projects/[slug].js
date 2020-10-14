import { getProject, getAllProjectsWithSlug } from '@/lib/api/project';
import styled from 'styled-components';
import Link from 'next/link';
import uniqeId from 'uniqid';

import {
 BLEND_MODE, pageMargin, pageHorizentalMargin, LANDSCAPE_TABLET, PORTRAIT_MOBILE,
} from '@/config/styles';
import Logo from '@/components/Logo';
import SlideShow from '@/components/SlideShow';
import Footer from '@/components/Footer';
import RichEdit from '@/components/RichEdit';

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

const Back = styled.a`
  font-family: 'Poppins', sans-serif;

  @media (max-width: ${LANDSCAPE_TABLET}) {
    font-size: 13px;
  }
`;

const Banner = styled.section`
  height: 500px;
  position: relative;
  text-align: center;

  h2 {
    width: 80%;
    font-size: 36px;
    color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: ${PORTRAIT_MOBILE}) {
      font-size: 26px;
    }
  }
`;

const Content = styled.section`
  ${pageHorizentalMargin};
  padding-top: 100px;

  @media (max-width: ${PORTRAIT_MOBILE}) {
    padding-top: 40px;
  }

  @import url("https://p.typekit.net/p.css?s=1&k=vqr3tuq&ht=tk&f=24425.24426.24427&a=13014026&app=typekit&e=css");

  @font-face {
    font-family:"orpheuspro";
    src:url("https://use.typekit.net/af/972118/000000000000000000016ea6/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/972118/000000000000000000016ea6/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/972118/000000000000000000016ea6/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
    font-display:auto;font-style:normal;font-weight:700;
  }

  @font-face {
    font-family:"orpheuspro";
    src:url("https://use.typekit.net/af/320790/000000000000000000015d5b/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/320790/000000000000000000015d5b/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/320790/000000000000000000015d5b/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
    font-display:auto;font-style:italic;font-weight:400;
  }

  @font-face {
    font-family:"orpheuspro";
    src:url("https://use.typekit.net/af/07139b/000000000000000000016ea5/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/07139b/000000000000000000016ea5/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/07139b/000000000000000000016ea5/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
    font-display:auto;font-style:normal;font-weight:400;
  }

  .title {
    font-family: "orpheuspro",serif;
    font-size: 36px;
    padding-bottom: 20px;
    border-bottom: 1px solid #c4c4c4;

    @media (max-width: ${PORTRAIT_MOBILE}) {
      font-size: 26px;
    }
  }
`;

// eslint-disable-next-line no-extend-native
String.prototype.splice = function strSplice(idx, rem, str) {
  return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

export default function Project({ data }) {
  const title = data?.project?.title?.rendered;

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
            BACK TO &quot;PROJECTS&quot;
          </Back>
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
                  const modifiyEditorStr = addClassToIframeParentTag(editor);

                  return (
                    <RichEdit
                      key={uniqeId()}
                      dangerouslySetInnerHTML={{ __html: modifiyEditorStr }}
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
