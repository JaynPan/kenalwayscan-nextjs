import { css } from 'styled-components';

export const BLEND_MODE = 'difference';
export const HEADER_HEIGHT = '80px';

export const LARGE_LAPTOP = '1200px';
export const SMALL_LAPTOP = '900px';
export const LANDSCAPE_TABLET = '768px';
export const PORTRAIT_TABLET = '600px';
export const PORTRAIT_MOBILE = '430px';

export const pageVerticalMargin = css`
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const pageHorizentalMargin = css`
  margin-left: 110px;
  margin-right: 110px;

  @media (max-width: ${LANDSCAPE_TABLET}) {
    margin-left: 5%;
    margin-right: 5%;
  }

  @media (max-width: ${PORTRAIT_MOBILE}) {
    margin-left: 16px;
    margin-right: 16px;
  }
`;

export const pageMargin = css`
  ${pageVerticalMargin};
  ${pageHorizentalMargin};
`;
