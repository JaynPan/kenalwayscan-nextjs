import styled from 'styled-components';

import { pageMargin, BLEND_MODE } from '@/config/styles';

const FooterWrapper = styled.footer`
  ${pageMargin};
  position: ${(props) => props.position};
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  color: #fff;
  mix-blend-mode: ${BLEND_MODE};
  border-bottom: 1px solid #fff;
`;

const Link = styled.a`
  display: block;
`;

const Phone = styled.p`
  margin: 0 0 0 22px;
`;

export default function Footer({ position }) {
  return (
    <FooterWrapper position={position}>
      <div style={{ flexGrow: 1 }}>
        <Link
          href="https://www.instagram.com/kenalwayscan/"
          target="_Blank"
        >
          @KENALWAYSCAN
        </Link>

      </div>
      <Link
        href="mailto:aken5393z@gmail.com"
        target="_Blank"
      >
        aken5393z@gmail.com
      </Link>
      <Phone>(+886) 09 635 33124</Phone>
    </FooterWrapper>
  );
}
