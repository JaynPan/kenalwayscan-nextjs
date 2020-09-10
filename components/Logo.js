import styled from 'styled-components';
import Link from 'next/link';

const LogoWrapper = styled.h4`
  font-family: Inter;
  font-weight: 900;
  position: relative;
  cursor: pointer;

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
