import ImageGallery from 'react-image-gallery';
import styled from 'styled-components';

import { RatioWrapper, RatioInnerStyle } from '@/components/RatioWrapper';

const SlideWrapper = styled.div`
  ${RatioInnerStyle}

  // align vertically center while in fullscreen mode
  .image-gallery {
    display: flex;
    align-items: center;
  }

  // change fullscreen icon styles
  .image-gallery-fullscreen-button {
    filter: none;

    &:hover {
      color: #ddd;
    }

    svg {
      height: 18px;
      width: 18px;
    }
  }
`;

export default function SlideShow({ data }) {
  const collectImgUrls = () => {
    const imgUrls = data
    .filter(({ image }) => image)
    .map(({ image }) => {
      const { thumbnail } = image.sizes;
      const original = image.url;
      return { original, thumbnail, bulletClass: 'slide-bullet' };
    });

    return imgUrls;
  };

  const { height, width } = data[0].image;

  return (
    <RatioWrapper ratio={(height / width) * 100}>
      <SlideWrapper>
        <ImageGallery
          lazyLoad
          showNav={false}
          showThumbnails={false}
          showFullscreenButton
          showPlayButton={false}
          showBullets
          autoPlay
          items={collectImgUrls()}
        />
      </SlideWrapper>
    </RatioWrapper>
  );
}
