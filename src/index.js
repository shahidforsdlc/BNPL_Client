import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import reportWebVitals from './reportWebVitals';
import PayLater from 'bnpl-wipeon';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer/>
    <div className='bg-gray-300'>
  <PayLater/>
    </div>
  </React.StrictMode>
);

reportWebVitals();
