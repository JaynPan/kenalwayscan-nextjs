import Link from 'next/link';
import styled from 'styled-components';

import { PAGE_MARGIN, BLEND_MODE } from '@/config/styles';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: ${PAGE_MARGIN};
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 18px;
  mix-blend-mode: ${BLEND_MODE};

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

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

const Logo = styled.h4`
  font-family: Inter;
  font-weight: 900;
  position: relative;

  span {
    position: absolute;
    right: -11px;
    top: -7px;
    font-size: 10px;
  }
`;

export default function Header() {
  return (
    <Nav>
      <Logo>
        KENALWAYSCAN
        <span>®</span>
      </Logo>
      <ul>
        <li>
          <Link as="/" href="/">
            <a>Overview</a>
          </Link>
        </li>
        <li>
          <Link as="/project" href="/project">
            <a>project</a>
          </Link>
        </li>
        <li>
          <Link as="/artworks" href="/artworks">
            <a>art works</a>
          </Link>
        </li>
        <li>
          <Link as="/about" href="/about">
            <a>about</a>
          </Link>
        </li>
      </ul>
    </Nav>
  );
}
