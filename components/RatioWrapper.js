import styled, { css } from 'styled-components';

export const RatioWrapper = styled.div`
  width: 100%;
  height: 0;
  padding-top: ${(props) => props.ratio}%;
  position: relative;
  background-color: #eee;
  overflow: hidden;
`;

export const RatioInnerStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;
