import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext'
import { QnaContextProvider } from './context/QnaContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <QnaContextProvider>
        <App />
      </QnaContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);