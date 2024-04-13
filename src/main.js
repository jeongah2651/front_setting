import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // 확장자 .tsx는 일반적으로 생략 가능합니다.
ReactDOM.render(_jsx(React.StrictMode, { children: _jsx(App, {}) }), document.getElementById('app'));
