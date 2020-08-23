import styled from 'styled-components';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const LayoutContainer = styled.div`
  background-color: #fff;
`;

export default function Layout({ children, footerPosition }) {
  return (
    <LayoutContainer>
      <Header />
      {children}
      <Footer position={footerPosition} />
    </LayoutContainer>
  );
}
