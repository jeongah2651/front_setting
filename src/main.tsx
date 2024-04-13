import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // 확장자 .tsx는 일반적으로 생략 가능합니다.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);
