import styled from 'styled-components';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
 pageMargin, HEADER_HEIGHT, PORTRAIT_TABLET, PORTRAIT_MOBILE,
} from '@/config/styles';

const LayoutContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex-grow: 1;
  ${(props) => !props.absolute && pageMargin};
  ${(props) => !props.absolute && `padding-top: ${HEADER_HEIGHT};`};
`;

const Copyright = styled.p`
  text-align: center;
  font-size: 36px;
  font-weight: 500;
  margin: 90px 0;
  line-height: 1.5em;
  @media (max-width: ${PORTRAIT_TABLET}) {
    font-size: 24px;
    margin: 60px 0;
  }
  @media (max-width: ${PORTRAIT_MOBILE}) {
    font-size: 18px;
    margin: 40px 0;
  }
`;

export default function Layout({ children, absolute = false, showCopyright = true }) {
  return (
    <LayoutContainer>
      <Header />
      <Main absolute={absolute}>
        {children}
      </Main>
      {showCopyright && (
        <Copyright>
          Kenalwayscan,
          <br />
          All Rights Reserved ©2019
        </Copyright>
      )}
      <Footer absolute={absolute} showCopyright={showCopyright} />
    </LayoutContainer>
  );
}
