import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext'
<<<<<<< HEAD
import { QnaContextProvider } from './context/QnaContext';
import { CommentsContextProvider } from './context/CommentsContext';
=======
>>>>>>> origin/error

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
<<<<<<< HEAD
      <QnaContextProvider>
        <CommentsContextProvider>
          <App />
        </CommentsContextProvider>
      </QnaContextProvider>
=======
      <App />
>>>>>>> origin/error
    </AuthContextProvider>
  </React.StrictMode>
);