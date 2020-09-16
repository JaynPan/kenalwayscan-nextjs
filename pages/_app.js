import { useEffect } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import Head from 'next/head';
import '@/styles/globals.css';
import '@/styles/normalize.css';
import 'react-image-gallery/styles/css/image-gallery.css';

const Spinner = styled.img`
  top: 0;
  left: 0;
  width: 15px;
  display: none;
  position: absolute;
  z-index: 999;
  animation:spin 1s linear infinite;

  @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
`;

const handlers = {};

const methods = {
  showSpinner(element) {
    // https://stackoverflow.com/questions/55650739/how-to-remove-event-listener-with-currying-function
    // eslint-disable-next-line no-return-assign
    return (
      handlers[element]
      || (handlers[element] = function assignSpinnerPostion(e) {
        const cursorPosition = {
          left: e.pageX + 20,
          top: e.pageY,
        };

        // eslint-disable-next-line no-param-reassign
        element.style.left = `${cursorPosition.left}px`;
        // eslint-disable-next-line no-param-reassign
        element.style.top = `${cursorPosition.top}px`;
      })
    );
  },
};

const start = () => {
  const spinnerDom = document.querySelector('#logo-spinner');
  console.log(spinnerDom);
  spinnerDom.style.display = 'block';
  document.addEventListener('mousemove', methods.showSpinner(spinnerDom));

  // setLoading(true);
};

const end = () => {
  const spinnerDom = document.querySelector('#logo-spinner');
  console.log(spinnerDom);
  spinnerDom.style.display = 'none';
  document.removeEventListener('mousemove', methods.showSpinner(spinnerDom));
  // setLoading(false);
};

Router.events.on('routeChangeStart', start);
Router.events.on('routeChangeComplete', end);
Router.events.on('routeChangeError', end);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Spinner
        id="logo-spinner"
        src="/logo.png"
        alt="spinner"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
