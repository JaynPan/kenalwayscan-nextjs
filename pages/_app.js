import React, { useState, useEffect } from 'react';
import Router from 'next/router';

import '@/styles/globals.css';
import '@/styles/normalize.css';
import 'react-image-gallery/styles/css/image-gallery.css';

const handlers = {};

function deviceHasMouse() {
  return matchMedia('(pointer:fine)').matches;
}

function assignSpinnerPosition(e, element) {
  const cursorPosition = {
    left: e.pageX + 15,
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
      || (handlers[element] = (e) => assignSpinnerPosition(e, element))
    );
  },
};

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);

    if (!deviceHasMouse()) {
      return;
    }

    const spinnerEle = document.querySelector('#logo-spinner-wrapper');

    document.addEventListener('click', methods.showSpinner(spinnerEle));
    document.addEventListener('mousemove', methods.showSpinner(spinnerEle));
  };

  const end = () => {
    if (!deviceHasMouse()) {
      setLoading(false);
      return;
    }

    const spinnerEle = document.querySelector('#logo-spinner-wrapper');

    // when switching different project page, the scroll position remains the same with the previous one which is the default behavior
    // Thus, scroll to top for a better UX
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    setTimeout(() => {
      setLoading(false);
      document.removeEventListener('mousemove', methods.showSpinner(spinnerEle));
    }, 1000);
  };

  useEffect(() => {
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
  }, []);

  return (
    <>
      <style jsx>
        {`
          #logo-spinner-wrapper {
            top: 0;
            left: 0;
            width: 15px;
            display: none;
            position: absolute;
            z-index: 999;
            animation:spin 1s linear infinite;
            @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
            display: ${loading ? 'block' : 'none'}
          }
        `}
      </style>
      <div id="logo-spinner-wrapper">
        {loading && (
          <img src="/logo.png" alt="spinner" />
          )}
      </div>
      <Component {...pageProps} />
      {/* place below spinner element to pevent spinner flickering */}
      <style global jsx>
        {`
          img {
            width: 100%;
            display: block;
          }         
        `}
      </style>
    </>
  );
}

export default MyApp;
