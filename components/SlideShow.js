import ImageGallery from 'react-image-gallery';
import styled from 'styled-components';

import { RatioWrapper, RatioInnerStyle } from '@/components/RatioWrapper';

const SlideWrapper = styled.div`
  ${RatioInnerStyle}
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
