import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';                            // 脚手架自身的Demo
// import App from './Normal/DemoRouterApp';           // 使用原始方式，测试路由的Demo
// import App from './RouterUtil/DemoRouterUtilApp';   // 使用 Util 方式，测试路由的Demo
import App from './History/DemoHistoryUtilApp';     // 使用 Util 方式，测试路由的Demo
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
