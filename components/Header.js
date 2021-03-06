import styled from 'styled-components';

import {
 BLEND_MODE, pageMargin, SMALL_LAPTOP,
} from '@/config/styles';
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
      margin-bottom: 10px;
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
      font-size: 15px;

      &:last-child { 
        margin-right: 0;
      }

      a {
        display: flex;

        &:hover {
          color: #22DA6B;
        }

        .text {
          &:hover {
            border-bottom: 1px solid #22DA6B;
          }
        }

        .arrow {
          display: none;
          margin-right: 6px;
        }

        &.active {
          .text {
            border-bottom: 1px solid;
          }
          .arrow {
            display: block;
          }
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

const routes = [
  { slug: '/', title: 'overview' },
  { slug: '/projects', title: 'projects' },
  { slug: '/artworks', title: 'artworks' },
  { slug: '/about', title: 'about' },
];

export default function Header() {
  return (
    <Nav>
      <Logo className="logo" />
      <ul>
        {routes.map(({ slug, title }) => (
          <li>
            <NavLink as={slug} href={slug}>
              <a>
                <span className="arrow">→</span>
                <span className="text">{title}</span>
              </a>
            </NavLink>
          </li>
        ))}
      </ul>
    </Nav>
  );
}
