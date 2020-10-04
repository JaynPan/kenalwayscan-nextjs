import Link from 'next/link';
import ProgressiveImage from 'react-progressive-image';
import styled from 'styled-components';

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

const ArrowRight = styled.img`
  width: 14px;
  margin-right: 6px;
`;

export default function ProjectItem({
 slug, title, date, image,
}) {
  return (
    <Link as={`/projects/${slug}`} href={`/projects/${slug}`}>
      <a>
        <div>
          <ProgressiveImage src={image?.original} placeholder={image?.placeholder} delay={50}>
            {(src, loading) => (
              <img
                style={{ filter: loading ? 'blur(5px)' : 'none' }}
                src={src}
                alt={title}
              />
          )}
          </ProgressiveImage>
          <Info>
            <p style={{ flexGrow: 1 }}>{title}</p>
            <ArrowRight src="/right-arrow.svg" alt="" />
            <p>{date.slice(0, 4)}</p>
          </Info>
        </div>
      </a>
    </Link>
  );
}
