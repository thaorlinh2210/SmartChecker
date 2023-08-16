import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Upload from './pages/Upload.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Results from './pages/Results.jsx';
import Payments from './pages/Payments.jsx';
import Login from './pages/Login.jsx';
import Contact from './pages/Contact.jsx';
import Account from './pages/Account.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Upload",
    element: <Upload/>,
  },
  {
    path: "Results",
    element: <Results/>,
  },
  {
    path: "Payments",
    element: <Payments/>,
  },
  {
    path: "Login",
    element: <Login/>,
  },
  {
    path: "Contact",
    element: <Contact/>,
  },
  {
    path: "Account",
    element: <Account/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
