import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './Components/App.jsx'
import Templates from './Components/Templates.jsx';
import './index.css'

const router = createBrowserRouter([
 {
  path:'/',
  element:<App />,
  errorElement: <div className="">404 NOT FOUND</div>,
 },
 {
  path:'templates',
  element:<Templates />,
  errorElement: <div className="">404 NOT FOUND</div>,
 },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
