import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import { ModalProvider } from './context/ModalContext.js';
import { FirebaseProvider } from './context/FirebaseContext.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <ModalProvider>
      <BrowserRouter>
        <FirebaseProvider>
          <App />
        </FirebaseProvider>
      </BrowserRouter>
  </ModalProvider>
  
);