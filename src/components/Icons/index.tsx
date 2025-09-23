import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PaymentsIcon from '@mui/icons-material/Payments';
interface IconProps {
  onClick?: () => void;
  color?: string;
}

const iconComponents = {
  editNormal: ({ onClick }: IconProps) => <EditIcon onClick={onClick} />,
  editButtonIcon: ({ onClick }: IconProps) => (
    <IconButton onClick={onClick} color="warning">
      <EditIcon />
    </IconButton>
  ),
  DeleteNormal: ({ onClick }: IconProps) => <DeleteIcon onClick={onClick} />,
  DeleteButtonIcon: ({ onClick }: IconProps) => (
    <IconButton onClick={onClick} color="error">
      <DeleteIcon />
    </IconButton>
  ),
  ViewNormal: ({ onClick }: IconProps) => <VisibilityIcon onClick={onClick} />,
  ViewButtonIcon: ({ onClick }: IconProps) => (
    <IconButton onClick={onClick} color="info">
      <VisibilityIcon />
    </IconButton>
  ),
  CloseNormal: ({ onClick }: IconProps) => (
    <HighlightOffIcon onClick={onClick} />
  ),
  CloseButtonIcon: ({ onClick }: IconProps) => (
    <IconButton onClick={onClick} color="error">
      <HighlightOffIcon />
    </IconButton>
  ),

  CreditScoreNormal: ({ onClick }: IconProps) => (
    <CreditScoreIcon onClick={onClick} />
  ),
  CreditScoreButtonIcon: ({ onClick }: IconProps) => (
    <IconButton onClick={onClick} color="primary">
      <CreditScoreIcon />
    </IconButton>
  ),
  CorporateCardButtonIcon: ({ onClick }: IconProps) => (
    <IconButton onClick={onClick} color="primary">
      <CreditCardIcon />
    </IconButton>
  ),
  AttachMoneyButtonIcon: ({ onClick }: IconProps) => (
    <IconButton onClick={onClick} color="primary">
      <PaymentsIcon />
    </IconButton>
  ),
};

export const EditNIcon = ({ onClick }: IconProps) =>
  iconComponents.editNormal({ onClick });
export const EditBcon = ({ onClick }: IconProps) =>
  iconComponents.editButtonIcon({ onClick });
export const DeleteNIcon = ({ onClick }: IconProps) =>
  iconComponents.DeleteNormal({ onClick });
export const DeleteBIcon = ({ onClick }: IconProps) =>
  iconComponents.DeleteButtonIcon({ onClick });
export const ViewNIcon = ({ onClick }: IconProps) =>
  iconComponents.ViewNormal({ onClick });
export const ViewBIcon = ({ onClick }: IconProps) =>
  iconComponents.ViewButtonIcon({ onClick });
export const CloseNIcon = ({ onClick }: IconProps) =>
  iconComponents.CloseNormal({ onClick });
export const CloseBIcon = ({ onClick }: IconProps) =>
  iconComponents.CloseButtonIcon({ onClick });

export const CreditScoreNIcon = ({ onClick }: IconProps) =>
  iconComponents.CreditScoreNormal({ onClick });
export const CreditScoreBIcon = ({ onClick }: IconProps) =>
  iconComponents.CreditScoreButtonIcon({ onClick });

export const CorporateCardBIcon = ({ onClick }: IconProps) =>
  iconComponents.CorporateCardButtonIcon({ onClick });
export const AttachMoneyBIcon = ({ onClick }: IconProps) =>
  iconComponents.AttachMoneyButtonIcon({ onClick });
