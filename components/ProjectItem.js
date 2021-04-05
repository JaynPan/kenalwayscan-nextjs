import Link from 'next/link';
import ProgressiveImage from 'react-progressive-image';
import styled from 'styled-components';

import { RatioWrapper, RatioInnerStyle } from '@/components/RatioWrapper';

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

const ArrowRight = styled.img`
  width: 14px;
  margin-right: 6px;
`;

const Img = styled.img`
  ${RatioInnerStyle};
  filter: ${(props) => (props.$loading ? 'blur(2px)' : 'none')};
`;

const Wrapper = styled.div`
  &:hover {
    opacity: 0.8
  }
`;

export default function ProjectItem({
 slug, title, date, image,
}) {
  return (
    <Link as={`/projects/${slug}`} href={`/projects/${slug}`}>
      <a>
        <Wrapper>
          <RatioWrapper ratio={66.67}>
            <ProgressiveImage src={image?.original} placeholder={image?.placeholder}>
              {(src, loading) => (
                <Img
                  src={src}
                  alt={title}
                  $loading={loading}
                />
              )}
            </ProgressiveImage>
          </RatioWrapper>
          <Info>
            <p style={{ flexGrow: 1 }}>{title}</p>
            <ArrowRight src="/right-arrow.svg" alt="" />
            <p>{date.slice(0, 4)}</p>
          </Info>
        </Wrapper>
      </a>
    </Link>
  );
}
