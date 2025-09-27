import RequestPageIcon from '@mui/icons-material/RequestPage';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';

import DashboardIcon from '@mui/icons-material/Dashboard';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import PetsIcon from '@mui/icons-material/Pets';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import InfoIcon from '@mui/icons-material/Info';

import VaccinesIcon from '@mui/icons-material/Vaccines';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import DetailsIcon from '@mui/icons-material/Details';
import GroupsIcon from '@mui/icons-material/Groups';

export const getMenuItems = (userRoles: string) => {
  switch (userRoles) {
   
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
              label: 'Milk Diary Summery',
              link: '/components/MilkDiarySummery',
              icon: <DetailsIcon />
            },
            {
              label: 'Animal Info',
              link: '/components/AnimalInfo',
              icon: <InfoIcon />
            },

            {
              label: 'Expense Tracker',
              link: '/components/ExpenseTracker',
              icon: <RequestPageIcon />
            },
            {
              label: 'Animal Care',
              link: '/components/AnimalCare',
              icon: <VaccinesIcon />
            },
            {
              label: 'Farmer Join',
              link: '/components/FarmerJoin',
              icon: <AgricultureIcon />
            },

            {
              label: 'Contact Details',
              link: '/components/ContactDetails',
              icon: <ContactPhoneIcon />
            },
            {
              label: 'Visiter Registration',
              link: '/components/VisiterRegistration',
              icon: <GroupsIcon />
            }
          ]
        },

          {
          title: 'Form Details Panel ',
          icon: <DisplaySettingsIcon color="primary" />,
          items: [
            {
              label: 'FormDetailsPanel',
              link: '/details/FormDetailsPanel',
              icon: <DynamicFormIcon />
            }
          ]
        },
      ];
    case 'farmer':
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
              label: 'Milk Diary Summery',
              link: '/components/MilkDiarySummery',
              icon: <DetailsIcon />
            },
            {
              label: 'Cow Info',
              link: '/components/AnimalInfo',
              icon: <InfoIcon />
            },

            {
              label: 'Expense Tracker',
              link: '/components/ExpenseTracker',
              icon: <RequestPageIcon />
            },
            {
              label: 'Cow Care',
              link: '/components/AnimalCare',
              icon: <VaccinesIcon />
            },
          

            {
              label: 'Contact Details',
              link: '/components/ContactDetails',
              icon: <ContactPhoneIcon />
            },
            {
              label: 'Visiter Registration',
              link: '/components/VisiterRegistration',
              icon: <GroupsIcon />
            }
          ]
        }
      ];

    default:
      return [];
  }
};
