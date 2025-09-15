import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Pages

const Overview = Loader(lazy(() => import('src/content/overview')));

// Dashboards

const Dashboard = Loader(lazy(() => import('src/view/Dashboard')));



// Components
const MilkDiary = Loader(lazy(() => import('src/view/MilkDiary')));
const CowInfo = Loader(lazy(() => import('src/view/CowCare')));
const ExpenseTracker = Loader(lazy(() => import('src/view/MilkDiary')));
const CowCare = Loader(lazy(() => import('src/view/CowCare')));
const FarmerJoin = Loader(lazy(() => import('src/view/FarmerJoin')));



const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Overview />
      },
      {
        path: 'overview',
        element: <Navigate to="/" replace />
      },
    
    ]
  },
  {
    path: 'dashboards',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="CowDashboard" replace />
      },
   
    
      {
        path: 'CowDashboard',
        element: <Dashboard />
      },
    ]
  },
 
  {
    path: '/components',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="MilkDiary" replace />
      },
      {
        path: 'MilkDiary',
        element: <MilkDiary />
      },
      {
        path: 'CowInfo',
        element: <CowInfo />
      },
      {
        path: 'ExpenseTracker',
        element: <ExpenseTracker />
      },
      {
        path: 'CowCare',
        element: <CowCare />
      },
      {
        path: 'FarmerJoin',
        element: <FarmerJoin />
      },
    
    ]
  }
];

export default routes;
