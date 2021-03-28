import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Global, css } from '@emotion/react';

const font = css`
@font-face {
  font-family: 'Noto Sans Japanese';
  font-style: normal;
  font-weight: 100;
  src: url(//fonts.gstatic.com/ea/notosansjapanese/v6/NotoSansJP-Thin.woff2) format('woff2'),
       url(//fonts.gstatic.com/ea/notosansjapanese/v6/NotoSansJP-Thin.woff) format('woff'),
       url(//fonts.gstatic.com/ea/notosansjapanese/v6/NotoSansJP-Thin.otf) format('opentype');
}
@font-face {
  font-family: 'Noto Sans Japanese';
  font-style: normal;
  font-weight: 200;
  src: url(//fonts.gstatic.com/ea/notosansjapanese/v6/NotoSansJP-Light.woff2) format('woff2'),
       url(//fonts.gstatic.com/ea/notosansjapanese/v6/NotoSansJP-Light.woff) format('woff'),
       url(//fonts.gstatic.com/ea/notosansjapanese/v6/NotoSansJP-Light.otf) format('opentype');
}
@font-face {
   font-family: 'Noto Sans Japanese';
   font-style: normal;
   font-weight: 300;
   src: url(//fonts.gstatic.com/ea/notosansjapanese/v6/NotoSansJP-DemiLight.woff2) format('woff2'),
        url(//fonts.gstatic.com/ea/notosansjapanese/v6/NotoSansJP-DemiLight.woff) format('woff'),
        url(//fonts.gstatic.com/ea/notosansjapanese/v6/NotoSansJP-DemiLight.otf) format('opentype');
}
@font-face {
   font-family: 'Noto Sans Japanese';
   font-style: normal;
   font-weight: 400;
   src: url(//fonts.gstatic.com/ea/notosansjapanese/v6/NotoSansJP-Regular.woff2) format('woff2'),
        url(//fonts.gstatic.com/ea/notosansjapanese/v6/NotoSansJP-Regular.woff) format('woff'),
        url(//fonts.gstatic.com/ea/notosansjapanese/v6/NotoSansJP-Regular.otf) format('opentype');
 }
@font-face {
   font-family: 'Noto Sans Japanese';
   font-style: normal;
   font-weight: 500;
   src: url(//fonts.gstatic.com/ea/notosansjapanese/v6/NotoSansJP-Medium.woff2) format('woff2'),
        url(//fonts.gstatic.com/ea/notosansjapanese/v6/NotoSansJP-Medium.woff) format('woff'),
        url(//fonts.gstatic.com/ea/notosansjapanese/v6/NotoSansJP-Medium.otf) format('opentype');
 }
@font-face {
   font-family: 'Noto Sans Japanese';
   font-style: normal;
   font-weight: 700;
   src: url(//fonts.gstatic.com/ea/notosansjapanese/v6/NotoSansJP-Bold.woff2) format('woff2'),
        url(//fonts.gstatic.com/ea/notosansjapanese/v6/NotoSansJP-Bold.woff) format('woff'),
        url(//fonts.gstatic.com/ea/notosansjapanese/v6/NotoSansJP-Bold.otf) format('opentype');
 }
@font-face {
   font-family: 'Noto Sans Japanese';
   font-style: normal;
   font-weight: 900;
   src: url(//fonts.gstatic.com/ea/notosansjapanese/v6/NotoSansJP-Black.woff2) format('woff2'),
        url(//fonts.gstatic.com/ea/notosansjapanese/v6/NotoSansJP-Black.woff) format('woff'),
        url(//fonts.gstatic.com/ea/notosansjapanese/v6/NotoSansJP-Black.otf) format('opentype');
 }
`

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Global styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      ${font}
    `}></Global>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
