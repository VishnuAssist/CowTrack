import { Box, Badge, styled, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import LogoImage from "./cow.png";
const LogoWrapper = styled(Link)(
  ({ theme }) => `
        color: ${theme.palette.text.primary};
        display: flex;
        text-decoration: none;
        width: 53px;
        margin: 0 auto;
        font-weight: ${theme.typography.fontWeightBold};
`
);

const LogoSignWrapper = styled(Box)(
  () => `
        width: 52px;
        height: 38px;
`
);

function Logo({ size }: { size?: number }) {
  const theme = useTheme();

  return (
    <LogoWrapper to="/dashboards">
      <Badge
        sx={{
          ".MuiBadge-badge": {
            fontSize: theme.typography.pxToRem(11),
            right: -2,
            top: 8,
          },
        }}
        overlap="circular"
        color="success"
      >
        <LogoSignWrapper>
          <img src={LogoImage} alt="logo" width={size ?? 70} />
        </LogoSignWrapper>
      </Badge>
    </LogoWrapper>
  );
}

export default Logo;
