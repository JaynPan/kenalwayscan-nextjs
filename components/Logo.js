import styled from 'styled-components';
import Link from 'next/link';

import { SMALL_LAPTOP } from '@/config/styles';

const LogoWrapper = styled.h4`
  font-family: 'Inter', sans-serif;
  font-weight: 900;
  position: relative;
  cursor: pointer;
  margin: 0;

  @media (max-width: ${SMALL_LAPTOP}) {
    margin-bottom: 20px;
  }

  span {
    position: absolute;
    right: -11px;
    top: -7px;
    font-size: 10px;
  }
`;

export default function Logo() {
  return (
    <Link as="/" href="/">
      <LogoWrapper>
        KENALWAYSCAN
        <span>®</span>
      </LogoWrapper>
    </Link>
  );
}
