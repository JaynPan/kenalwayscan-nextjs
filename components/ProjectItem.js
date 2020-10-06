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

const ImgWrapper = styled.div`
  width: 100%;
  height: 0;
  padding-top: 66.66%;
  position: relative;
  background-color: #eee;
  overflow: hidden;
`;

const Img = styled.img`
  filter: ${(props) => (props.loading ? 'blur(5px)' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export default function ProjectItem({
 slug, title, date, image,
}) {
  return (
    <Link as={`/projects/${slug}`} href={`/projects/${slug}`}>
      <a>
        <div>
          <ImgWrapper>
            <ProgressiveImage src={image?.original} placeholder={image?.placeholder}>
              {(src, loading) => (
                <Img
                  src={src}
                  alt={title}
                  loading={loading}
                />
              )}
            </ProgressiveImage>
          </ImgWrapper>
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
