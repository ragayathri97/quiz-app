import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const container = document.getElementById('root');
const root = createRoot(container);
// createRoot = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<React.StrictMode>
  <App />
</React.StrictMode>
);