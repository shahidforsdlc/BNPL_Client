import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer/>
    <div className='bg-gray-300'>
    <App />
    </div>
  </React.StrictMode>
);

reportWebVitals();
