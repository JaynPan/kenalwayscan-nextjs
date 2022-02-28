import ImageGallery from 'react-image-gallery';
import styled from 'styled-components';

import { RatioWrapper, RatioInnerStyle } from '@/components/RatioWrapper';

const SlideWrapper = styled.div`
  ${RatioInnerStyle}

  // 為了讓 slider 照片能夠完全 cover container 後的設定
  .image-gallery,
  .image-gallery-content,
  .image-gallery-slide-wrapper,
  .image-gallery-swipe,
  .image-gallery-slides,
  .image-gallery-slide,
  .image-gallery-slide div {
    height: 100%;
  }

  // 不確定為何要 + 80px，是 work around 出來的結果
  .image-gallery-content .image-gallery-slide .image-gallery-image {
    max-height: calc(100vh + 80px);
    object-fit: cover;
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
          showFullscreenButton={false}
          showPlayButton={false}
          showBullets
          autoPlay
          items={collectImgUrls()}
        />
      </SlideWrapper>
    </RatioWrapper>
  );
}
