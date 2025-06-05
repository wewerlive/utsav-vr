import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { NextUIProvider } from '@nextui-org/react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Demo from './pages/Demo.jsx';
import SponsorBoard from './components/SponsorBoard.jsx';
import VideoAdBoard from './components/VideoAdBoard.jsx';
import AboutUs from './pages/AboutUs.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/glimpse",
    element: <Demo />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  // </React.StrictMode>,
);
