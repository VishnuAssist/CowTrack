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

const Login = Loader(lazy(() => import('src/view/Authentication/loginPage')));

// Dashboards

const Dashboard = Loader(lazy(() => import('src/view/Dashboard')));



// Components
const MilkDiary = Loader(lazy(() => import('src/view/MilkDiary')));
const MilkDiarySummery = Loader(lazy(() => import('src/view/MilkDiarySummery')));
const AnimalInfo = Loader(lazy(() => import('src/view/AnimalInfo')));
const ExpenseTracker = Loader(lazy(() => import('src/view/MilkDiary')));
const AnimalCare = Loader(lazy(() => import('src/view/AnimalCare')));
const FarmerJoin = Loader(lazy(() => import('src/view/FarmerJoin')));

const ContactDetails = Loader(lazy(()=> import('src/view/ContactDetails')));

const VisiterRegistration = Loader(lazy(()=> import('src/view/VisiterRegistration')));
const FormDetailsPanel = Loader(lazy(()=> import('src/view/FormDetailsPanel')))


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
