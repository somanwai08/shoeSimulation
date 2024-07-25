import React, { Children } from 'react'
import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import KellyPage from '../components/Pages/Kelly Page/KellyPage';
import LegacyPage from '../components/Pages/Legacy Page/LegacyPage';
import App from '../App';


export const routes = [
    {
      path: '/mesh-simulation',
      element: <App />,
      children: [
        {
          path: '',
          element: <Navigate to="kelly" replace />,
        },
        {
          path: 'kelly',
          element: <KellyPage />,
        },
        {
          path: 'legacy',
          element: <LegacyPage />,
        },
      ],
    },
  ];



const router = createBrowserRouter(routes)

export default router