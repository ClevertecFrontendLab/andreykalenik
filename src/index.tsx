import React from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import 'antd/dist/antd.css';
import './index.scss';
import { App } from './App';
App;
App;
const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
