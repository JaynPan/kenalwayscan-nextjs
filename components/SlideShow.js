import ImageGallery from 'react-image-gallery';

export default function SlideShow({ data }) {
  const collectImgUrls = () => {
    const imgUrls = data
    .filter(({ image }) => image)
    .map(({ image }) => {
      const { thumbnail } = image.sizes;
      const original = image.url;
      return { original, thumbnail };
    });

    return imgUrls;
  };

  return (
    <div>
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
    </div>
  );
}
