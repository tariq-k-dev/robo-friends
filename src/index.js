import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import 'tachyons';
import './index.scss';
import reportWebVitals from './reportWebVitals';

// Components
import App from './containers/App';

/* New React 18 way of rendering to the DOM */
const container = document.getElementById('root');

// Create a root
const root = ReactDOMClient.createRoot(container);

// Initial render
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
