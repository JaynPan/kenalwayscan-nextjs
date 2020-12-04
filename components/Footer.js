import styled from 'styled-components';

import {
 pageMargin, BLEND_MODE, SMALL_LAPTOP, PORTRAIT_TABLET,
} from '@/config/styles';

const FooterWrapper = styled.footer`
  ${pageMargin};
  font-family: 'Poppins', sans-serif;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
  mix-blend-mode: ${BLEND_MODE};

  @media (max-width: ${SMALL_LAPTOP}) {
    font-size: 13px;
    margin-bottom: 20px;
  }
`;

const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 4px;
  border-bottom: 1px solid #fff;
`;

const Link = styled.a`
  display: block;
`;

const Phone = styled.p`
  margin: 0 0 0 22px;

  @media (max-width: ${PORTRAIT_TABLET}) {
    display: none;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
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
