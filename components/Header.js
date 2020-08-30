import styled from 'styled-components';

import { BLEND_MODE, pageMargin } from '@/config/styles';
import NavLink from '@/components/NavLink';
import Logo from '@/components/Logo';

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

  h4, li {
    margin: 0;
  }

  ul {
    display: flex;

    h4 {
      font-family: Inter;
      font-weight: 900;
      position: relative;
    }
    
    li {
      margin-right: 40px;
      text-transform: uppercase;
      list-style: none;
      font-family: Poppins;
      white-space: nowrap;

      &:last-child {
        margin-right: 0;
      }

      a {
        &:hover,
        &.active {
          border-bottom: 1px solid #fff;
        }
      }
    }
  }
`;

export default function Header() {
  return (
    <Nav>
      <Logo />
      <ul>
        <li>
          <NavLink as="/" href="/">
            <a>Overview</a>
          </NavLink>
        </li>
        <li>
          <NavLink as="/projects" href="/projects">
            <a>projects</a>
          </NavLink>
        </li>
        <li>
          <NavLink as="/artworks" href="/artworks">
            <a>artworks</a>
          </NavLink>
        </li>
        <li>
          <NavLink as="/about" href="/about">
            <a>about</a>
          </NavLink>
        </li>
      </ul>
    </Nav>
  );
}
