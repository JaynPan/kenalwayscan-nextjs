import styled from 'styled-components';

import { pageMargin, BLEND_MODE } from '@/config/styles';

const FooterWrapper = styled.footer`
  ${pageMargin};
  position: ${(props) => (props.absolute ? 'absolute' : 'relative')};
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
  mix-blend-mode: ${BLEND_MODE};
`;

const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #fff;
`;

const Link = styled.a`
  display: block;
`;

const Phone = styled.p`
  margin: 0 0 0 22px;
`;

const Copyright = styled.p`
  text-align: center;
  font-size: 36px;
  font-weight: 500;
  margin: 90px 0;
  line-height: 1.5em;
`;

export default function Footer({ absolute, showCopyright = true }) {
  return (
    <FooterWrapper absolute={absolute}>
      {showCopyright && (
        <Copyright>
          Kenalwayscan,
          <br />
          All Rights Reserved ©2019
        </Copyright>
      )}
      <Contact>
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
      </Contact>
    </FooterWrapper>
  );
}
