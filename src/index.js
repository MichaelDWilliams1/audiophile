import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SiteDataProvider } from './context/useSiteData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<SiteDataProvider>
    <App />
</SiteDataProvider>
);
