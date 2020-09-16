import Router from 'next/router';
import '@/styles/globals.css';
import '@/styles/normalize.css';
import 'react-image-gallery/styles/css/image-gallery.css';

const start = () => {
  document.querySelector('body').style.cursor = 'wait';
};

const end = () => {
  document.querySelector('body').style.cursor = 'auto';
};

Router.events.on('routeChangeStart', start);
Router.events.on('routeChangeComplete', end);
Router.events.on('routeChangeError', end);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
