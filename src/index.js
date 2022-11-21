import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WaterMark from "./Watermark"

const config = {
  text: '12345678@111.com',
  height: 100,
  width: 150,
  opacity: 0.5,
  // font: '10px sans-serif',
  // rotate: -30,
  // fillStyle: '#ccc',
  // text: '',
  // zIndex: 9999
}
// 配置水印
new WaterMark(config)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
