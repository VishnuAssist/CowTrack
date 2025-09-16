import RequestPageIcon from '@mui/icons-material/RequestPage';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';

import DashboardIcon from '@mui/icons-material/Dashboard';

import PetsIcon from '@mui/icons-material/Pets';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import InfoIcon from '@mui/icons-material/Info';

import VaccinesIcon from '@mui/icons-material/Vaccines';

export const getMenuItems = (userRoles: string) => {
  switch (userRoles) {
    case 'SuperAdmin':
    case 'Admin':
      return [
        {
          title: 'Dashboards',
          icon: <HomeIcon color="primary" />,
          items: [
            {
              label: 'Dashboard',
              link: '/dashboards/CowDashboard',
              icon: <DashboardIcon />
            }
          ]
        },
        {
          title: 'Features',
          icon: <DescriptionIcon color="primary" />,
          items: [
            {
              label: 'Milk Diary',
              link: '/components/MilkDiary',
              icon: <PetsIcon />
            },
            {
              label: 'Cow Info',
              link: '/components/CowInfo',
              icon: <InfoIcon />
            },

            {
              label: 'Expense Tracker',
              link: '/components/ExpenseTracker',
              icon: <RequestPageIcon />
            },
            {
              label: 'Cow Care',
              link: '/components/CowCare',
              icon: <VaccinesIcon />
            },
            {
              label: 'Farmer Join',
              link: '/components/FarmerJoin',
              icon: <AgricultureIcon />
            },
          ]
        }
      ];

    default:
      return [];
  }
};
