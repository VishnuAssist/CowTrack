import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from './layouts/SidebarLayout';
import BaseLayout from './layouts/BaseLayout';

import SuspenseLoader from './components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Pages

const Login = Loader(lazy(() => import('./view/Authentication/loginPage')));

// Dashboards

const Dashboard = Loader(lazy(() => import('./view/Dashboard')));



// Components
const MilkDiary = Loader(lazy(() => import('./view/MilkDiary')));
const MilkDiarySummery = Loader(lazy(() => import('./view/MilkDiarySummery')));
const AnimalInfo = Loader(lazy(() => import('./view/AnimalInfo')));
const ExpenseTracker = Loader(lazy(() => import('./view/ExpenseTracker')));
const AnimalCare = Loader(lazy(() => import('./view/AnimalCare')));
const FarmerJoin = Loader(lazy(() => import('./view/FarmerJoin')));

const ContactDetails = Loader(lazy(()=> import('./view/ContactDetails')));

const VisiterRegistration = Loader(lazy(()=> import('./view/VisiterRegistration')));
const FormDetailsPanel = Loader(lazy(()=> import('./view/FormDetailsPanel')))


const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
  {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "",
        element: <Navigate to="/Login" replace />,
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
    path: '/details',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="FormDetailsPanel" replace />
      },
   
    
      {
        path: 'FormDetailsPanel',
        element: <FormDetailsPanel />
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
        path: 'MilkDiarySummery',
        element: <MilkDiarySummery />
      },
      {
        path: 'AnimalInfo',
        element: <AnimalInfo />
      },
      {
        path: 'ExpenseTracker',
        element: <ExpenseTracker />
      },
      {
        path: 'AnimalCare',
        element: <AnimalCare />
      },
      {
        path: 'FarmerJoin',
        element: <FarmerJoin />
      },
      {
        path: 'ContactDetails',
        element: <ContactDetails />
      },
      {
        path: 'VisiterRegistration',
        element: <VisiterRegistration />
      },
    
    ]
  }
];

export default routes;
