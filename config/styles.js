import { css } from 'styled-components';

export const BLEND_MODE = 'difference';
export const HEADER_HEIGHT = '80px';

export const pageVerticalMargin = css`
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const pageHorizentalMargin = css`
  margin-left: 110px;
  margin-right: 100px;
`;

export const pageMargin = css`
  ${pageVerticalMargin};
  ${pageHorizentalMargin};
`;
