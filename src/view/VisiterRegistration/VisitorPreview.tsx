import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Grid,
  Box,
  Button
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import EventIcon from "@mui/icons-material/Event";
import NoteIcon from "@mui/icons-material/Note";
import HelpIcon from "@mui/icons-material/Help";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import { VisitorRegistrationType } from "src/models/VisitorRegistrationType";

interface Props {
  preview: boolean;
  closePreview: () => void;
  visitor: VisitorRegistrationType | null;
}

const PreviewVisitor: React.FC<Props> = ({ preview, closePreview, visitor }) => {
  if (!visitor) return null;

  const renderRow = (icon: JSX.Element, label: string, value?: string) => (
    <Grid container alignItems="center" spacing={1} sx={{ mb: 1 }}>
      <Grid >{icon}</Grid>
      <Grid  >
        <Typography variant="body2" color="textSecondary">
          {label}
        </Typography>
        <Typography variant="subtitle1">{value || "-"}</Typography>
      </Grid>
    </Grid>
  );

  return (
    <Dialog open={preview} onClose={closePreview} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ bgcolor: "primary.main", color: "white" }}>
        Visitor Details
      </DialogTitle>
      <DialogContent dividers>
        <Box>
          {renderRow(<PersonIcon color="primary" />, "Name", visitor.name)}
          {renderRow(<HomeIcon color="primary" />, "Native", visitor.native)}
          {renderRow(<EmailIcon color="primary" />, "Email", visitor.email)}
          {renderRow(<PhoneIcon color="primary" />, "Contact", visitor.contact)}
          {renderRow(
            <LocalOfferIcon color="primary" />,
            "Purpose",
            visitor.purpose
          )}
          {renderRow(
            <HelpIcon color="primary" />,
            "They Provide",
            visitor.theyProvide
          )}
          {renderRow(
            <RequestPageIcon color="primary" />,
            "They Need",
            visitor.theyNeed
          )}
          {renderRow(
            <EventIcon color="primary" />,
            "Date & Time",
            visitor.dateTime
          )}
          {renderRow(<HomeIcon color="primary" />, "Address", visitor.address)}
          {renderRow(
            <BusinessIcon color="primary" />,
            "Company",
            visitor.companyName
          )}
          {renderRow(<NoteIcon color="primary" />, "Notes", visitor.notes)}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={closePreview} variant="contained" color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PreviewVisitor;
