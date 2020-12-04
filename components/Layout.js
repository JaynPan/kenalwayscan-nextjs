import styled from 'styled-components';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { pageMargin, HEADER_HEIGHT } from '@/config/styles';

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

export default function Layout({ children, absolute = false }) {
  return (
    <LayoutContainer>
      <Header />
      <Main absolute={absolute}>
        {children}
      </Main>
      <Footer />
    </LayoutContainer>
  );
}
