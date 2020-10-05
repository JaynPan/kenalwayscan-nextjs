import Router from 'next/router';

import '@/styles/globals.css';
import '@/styles/normalize.css';
import 'react-image-gallery/styles/css/image-gallery.css';

const handlers = {};

function isLaptopOS() {
  if (navigator.appVersion.indexOf('Win') !== -1) return true;
  if (navigator.appVersion.indexOf('Mac') !== -1) return true;
  if (navigator.appVersion.indexOf('X11') !== -1) return true;
  if (navigator.appVersion.indexOf('Linux') !== -1) return true;

  return false;
}

function assignSpinnerPostion(e, element) {
  const cursorPosition = {
    left: e.pageX + 20,
    top: e.pageY,
  };

  // eslint-disable-next-line no-param-reassign
  element.style.left = `${cursorPosition.left}px`;
  // eslint-disable-next-line no-param-reassign
  element.style.top = `${cursorPosition.top}px`;
}

const methods = {
  showSpinner(element) {
    // https://stackoverflow.com/questions/55650739/how-to-remove-event-listener-with-currying-function
    // eslint-disable-next-line no-return-assign
    return (
      handlers[element]
      || (handlers[element] = (e) => assignSpinnerPostion(e, element))
    );
  },
};

const start = () => {
  if (!isLaptopOS()) {
    return;
  }

  const spinnerEle = document.querySelector('#logo-spinner');

  spinnerEle.style.display = 'block';
  document.addEventListener('click', methods.showSpinner(spinnerEle));
  document.addEventListener('mousemove', methods.showSpinner(spinnerEle));
};

const end = () => {
  if (!isLaptopOS()) {
    return;
  }

  const spinnerEle = document.querySelector('#logo-spinner');

  setTimeout(() => {
    spinnerEle.style.display = 'none';
    document.removeEventListener('mousemove', methods.showSpinner(spinnerEle));
  }, 1000);
};

Router.events.on('routeChangeStart', start);
Router.events.on('routeChangeComplete', end);
Router.events.on('routeChangeError', end);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx>
        {`
          #logo-spinner {
            top: 0;
            left: 0;
            width: 15px;
            display: none;
            position: absolute;
            z-index: 999;
            animation:spin 1s linear infinite;
          
            @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
          }
        `}
      </style>
      <style global jsx>
        {`
          img {
            width: 100%;
            display: block;
          }         
        `}
      </style>
      <img
        id="logo-spinner"
        src="/logo.png"
        alt="spinner"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
