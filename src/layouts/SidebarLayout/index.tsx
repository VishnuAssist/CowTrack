import { FC, ReactNode, useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Box, alpha, lighten, useMediaQuery, useTheme } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';
import Header from './Header';
import { color } from "../../components/color";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PetsIcon from '@mui/icons-material/Pets';
interface SidebarLayoutProps {
  children?: ReactNode;
}

const SidebarLayout: FC<SidebarLayoutProps> = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [expanded, setExpanded] = useState(true);

  return (
    <>
      <Box
        sx={{
          flex: 1,
          height: '100%',

          '.MuiPageTitle-wrapper': {
            background:
              theme.palette.mode === 'dark'
                ? theme.colors.alpha.trueWhite[5]
                : theme.colors.alpha.white[50],
            marginBottom: `${theme.spacing(4)}`,
            boxShadow:
              theme.palette.mode === 'dark'
                ? `0 1px 0 ${alpha(
                    lighten(theme.colors.primary.main, 0.7),
                    0.15
                  )}, 0px 2px 4px -3px rgba(0, 0, 0, 0.2), 0px 5px 12px -4px rgba(0, 0, 0, .1)`
                : `0px 2px 4px -3px ${alpha(
                    theme.colors.alpha.black[100],
                    0.1
                  )}, 0px 5px 12px -4px ${alpha(
                    theme.colors.alpha.black[100],
                    0.05
                  )}`
          }
        }}
      >
        {/* <Header />
        <Sidebar /> */}

           <Header expand={expanded} />
        {!isMobile && (
          <Sidebar expanded={expanded} setExpanded={(e) => setExpanded(e)} />
        )}
       <Box
          sx={{
            position: "relative",
            zIndex: 5,
            display: "block",
            flex: 1,
            pt: `${theme.header.height}`,
            [theme.breakpoints.up("lg")]: {
              ml: `${expanded ? theme.sidebar.width : "80px"}`,
            },
          }}
        >
          <Box display="block">
            <Outlet />
            {isMobile && 
            
                <BottomNavigation
                  showLabels
                  value={value}
                  onChange={(_event, newValue) => {
                    setValue(newValue);
                  }}
                  sx={{
                    width: "100.2%",
                    position: "fixed",
                    bottom: -1,
                    zIndex: 20,
                    height: 80,pb:2,pt:1,
                    borderTopRightRadius: 0,
                    borderTopLeftRadius: 0,
                    background:
                      theme.palette.mode === "dark"
                        ? "#0C112B"
                        : theme.colors.primary.dark,

                    justifyContent: "space-around",
                    alignItems: "center",
                    "& .MuiBottomNavigationAction-root": {
                      minWidth: "auto",
                      color: "white",
                      "&.Mui-selected": {
                        color: `${color.lightGreen}`,
                        p: 2,
                      },
                    },
                  }}
                >
                  <BottomNavigationAction
                    label="Dashboard"
                    icon={<DashboardIcon />}
                    component={Link}
                    to="/dashboards/CowDashboard"
                  />
                  <BottomNavigationAction
                    label="Claims"
                    icon={<PetsIcon />}
                    component={Link}
                    to="/components/MilkDiary"
                  />
              
                </BottomNavigation>}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SidebarLayout;
