import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Contact from './pages/Contact';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/aboutus', element: <AboutUs /> },
      { path: '/services', element: <Services /> },
      { path: '/contact', element: <Contact /> },
      { path: '/termsandconditions', element: <TermsAndConditions /> },
      { path: '/privacypolicy', element: <PrivacyPolicy /> },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
