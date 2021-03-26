import styled from 'styled-components';
import Link from 'next/link';

import Nektar from '@/components/p5/Nektar';
import Logo from '@/components/Logo';
import Footer from '@/components/Footer';
import {
  BLEND_MODE, pageMargin, LANDSCAPE_TABLET,
 } from '@/config/styles';

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

  .text {
    border-bottom: 1px solid;
  }

  @media (max-width: ${LANDSCAPE_TABLET}) {
    font-size: 13px;
  }
`;

export default function Flight() {
  return (
    <ProjectWrapper>
      <Nav>
        <Logo />
        <Link as="/projects" href="/projects">
          <Back href="/projects">
            →
            {' '}
            <span className="text">BACK TO &quot;PROJECTS&quot;</span>
          </Back>
        </Link>
      </Nav>

      <Nektar />
      <Footer showCopyright />
    </ProjectWrapper>

  );
}
