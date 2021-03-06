import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';                                // 脚手架自身的Demo
// import App from './DemoApp/DemoTableHomePage';          // 单独测试不支持跳转的Table首页
// import App from './DemoApp/DemoCollectionHomePage';     // 单独测试不支持跳转的Table首页
import App from './DemoApp/DemoApp';                    // 混合测试支持跳转的首页

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
