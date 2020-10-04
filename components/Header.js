import styled from 'styled-components';

import { BLEND_MODE, pageMargin, SMALL_LAPTOP } from '@/config/styles';
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
  
  @media (max-width: ${SMALL_LAPTOP}) {
    flex-direction: column;
    align-items: flex-start;

    .logo {
      margin-bottom: 20px;
    }
  }

  ul {
    display: flex;
    
    li {
      font-family: 'Poppins', sans-serif;
      text-transform: uppercase;
      margin: 0;
      margin-right: 40px;
      list-style: none;
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

    @media (max-width: ${SMALL_LAPTOP}) {
      width: 100%;
      justify-content: space-between;

      li {
        margin-right: 0;
        font-size: 13px;
      }
    }
  }
`;

export default function Header() {
  return (
    <Nav>
      <Logo className="logo" />
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
