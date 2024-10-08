import React from 'react'
import { Navigate, createBrowserRouter } from "react-router-dom";
import KellyPage from '../components/Pages/Kelly Page/KellyPage';
import LegacyPage from '../components/Pages/Legacy Page/LegacyPage';
import App from '../App';


export const routes = [
    {
      path: '/mesh',
      element: <App />,
      children: [
        {
          path: '',
          element: <Navigate to="kly64" replace />,
        },
        {
          path: 'kly64',
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