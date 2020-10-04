import styled from 'styled-components';
import Link from 'next/link';

const LogoWrapper = styled.h4`
  font-family: 'Inter', sans-serif;
  font-weight: 900;
  position: relative;
  cursor: pointer;
  margin: 0;

  span {
    position: absolute;
    right: -11px;
    top: -7px;
    font-size: 10px;
  }
`;

export default function Logo(props) {
  return (
    <Link as="/" href="/">
      <LogoWrapper {...props}>
        KENALWAYSCAN
        <span>®</span>
      </LogoWrapper>
    </Link>
  );
}
