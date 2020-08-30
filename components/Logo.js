import styled from 'styled-components';

const LogoWrapper = styled.h4`
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

export default function Logo() {
  return (
    <LogoWrapper>
      KENALWAYSCAN
      <span>®</span>
    </LogoWrapper>
  );
}
