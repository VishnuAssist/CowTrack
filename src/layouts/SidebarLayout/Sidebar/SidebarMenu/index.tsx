import { Fragment, useContext } from "react";

import {
  ListSubheader,
  alpha,
  Box,
  List,
  styled,
  Button,
  ListItem,
  TooltipProps,
  Tooltip,
  tooltipClasses,
} from "@mui/material";
import { NavLink as RouterLink } from "react-router-dom";
import { SidebarContext } from '../../../../contexts/SidebarContext';

import { RootState, useAppSelector } from "../../../../store/configureStore";

import { getMenuItems } from "./Lists";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: ${theme.spacing(1)};

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
  }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: ${theme.colors.alpha.trueWhite[50]};
      padding: ${theme.spacing(0, 2.5)};
      line-height: 1.4;
    }
`
);

const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {

      .MuiListItem-root {
        padding: 1px 0;

        .MuiBadge-root {
          position: absolute;
          right: ${theme.spacing(3.2)};

          .MuiBadge-standard {
            background: ${theme.colors.primary.main};
            font-size: ${theme.typography.pxToRem(10)};
            font-weight: bold;
            text-transform: uppercase;
            color: ${theme.palette.primary.contrastText};
          }
        }
    
        .MuiButton-root {
          display: flex;
          color: ${theme.colors.alpha.trueWhite[70]};
          background-color: transparent;
          width: 100%;
          justify-content: flex-start;
          padding: ${theme.spacing(1.2, 3)};

          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(["color"])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            color: ${theme.colors.alpha.trueWhite[30]};
            font-size: ${theme.typography.pxToRem(20)};
            margin-right: ${theme.spacing(1)};
          }
          
          .MuiButton-endIcon {
            color: ${theme.colors.alpha.trueWhite[50]};
            margin-left: auto;
            opacity: .8;
            font-size: ${theme.typography.pxToRem(20)};
          }

          &.active,
          &:hover {
            background-color: ${alpha(theme.colors.alpha.trueWhite[100], 0.06)};
            color: ${theme.colors.alpha.trueWhite[100]};

            .MuiButton-startIcon,
            .MuiButton-endIcon {
              color: ${theme.colors.alpha.trueWhite[100]};
            }
          }
        }

        &.Mui-children {
          flex-direction: column;

          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(7)};
          }
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }

          .MuiListItem-root {
            padding: 1px 0;

            .MuiButton-root {
              padding: ${theme.spacing(0.8, 3)};

              .MuiBadge-root {
                right: ${theme.spacing(3.2)};
              }

              &:before {
                content: ' ';
                background: ${theme.colors.alpha.trueWhite[100]};
                opacity: 0;
                transition: ${theme.transitions.create([
                  "transform",
                  "opacity",
                ])};
                width: 6px;
                height: 6px;
                transform: scale(0);
                transform-origin: center;
                border-radius: 20px;
                margin-right: ${theme.spacing(1.8)};
              }

              &.active,
              &:hover {

                &:before {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
`
);
const TooltipWrapper = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.colors.alpha.trueWhite[100],
    color: theme.palette.getContrastText(theme.colors.alpha.trueWhite[100]),
    fontSize: theme.typography.pxToRem(12),
    fontWeight: "bold",
    borderRadius: theme.general.borderRadiusSm,
    boxShadow:
      "0 .2rem .8rem rgba(7,9,25,.18), 0 .08rem .15rem rgba(7,9,25,.15)",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.colors.alpha.trueWhite[100],
  },
}));
function SidebarMenu({
  expanded,
  expand,
  mobile,
}: {
  expanded: boolean;
  expand: () => void;
  mobile: boolean;
}) {
  const { closeSidebar } = useContext(SidebarContext);
  const { role } = useAppSelector((state: RootState) => state.login);
  // const { isAuthenticated, error } = useAppSelector((state) => state.login);

  const renderMenuItems = (items: any) => {
    return items.map((item: any, index: any) => (
      <ListItem key={index} component="div">
        {!expanded ? (
          <TooltipWrapper title={item?.label} arrow>
            <Button
              disableRipple
              component={RouterLink}
              onClick={closeSidebar}
              to={item.link}
              startIcon={item.icon}
            >
              {expanded && item.label}
            </Button>
          </TooltipWrapper>
        ) : (
          <Button
            disableRipple
            component={RouterLink}
            onClick={closeSidebar}
            to={item.link}
            startIcon={item.icon}
          >
            {expanded && item.label}
          </Button>
        )}
      </ListItem>
    ));
  };

  const renderSidebarItems = () => {
    const items: any[] = getMenuItems(role);
    return (
      <>
        <SubMenuWrapper>
          
          <List component="div">
            
            {!mobile && (
              <ListItem component="div">
                <Button
                  disableRipple
                  component="a"
                  onClick={expand}
                  startIcon={!expanded ? <ChevronRight /> : <ChevronLeft />}
                >
                  {expanded && "Collapse"}
                </Button>
              </ListItem>
            )}
          </List>
        </SubMenuWrapper>
        {items.map((group, index) =>
          expanded ? (
            <List
              key={index}
              component="div"
              subheader={
                <ListSubheader component="div" disableSticky>
                  {group.title}
                </ListSubheader>
              }
            >
              <SubMenuWrapper>
                <List component="div">{renderMenuItems(group.items)}</List>
              </SubMenuWrapper>
            </List>
          ) : (
            <Fragment key={index}>
              {" "}
              <ListSubheader component="div" disableSticky sx={{ ml: 1 }}>
                {group?.icon}
              </ListSubheader>
              <SubMenuWrapper>
                {" "}
                <List component="div">{renderMenuItems(group.items)}</List>
              </SubMenuWrapper>{" "}
            </Fragment>
          )
        )}
      </>
    );
  };

  return <MenuWrapper>{renderSidebarItems()}</MenuWrapper>;
}

export default SidebarMenu;
