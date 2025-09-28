import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { FC } from "react";
import { AnimalCareType } from "src/models/AnimalCareType";

interface Props {
  preview: boolean;
  closePreview: () => void;
  PreviewDetails: AnimalCareType | null;
}

const AnimalCarePreview: FC<Props> = ({ preview, closePreview, PreviewDetails }) => {
  if (!PreviewDetails) return null;

  return (
    <Dialog open={preview} onClose={closePreview} maxWidth="sm" fullWidth>
      <DialogTitle>
        Animal Care Details
        <IconButton onClick={closePreview} sx={{ position: "absolute", right: 8, top: 8 }}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid size={{xs:6}}>
            <Typography variant="body2">Animal Type</Typography>
            <Typography fontWeight="bold">{PreviewDetails.animalType}</Typography>
          </Grid>
          <Grid size={{xs:6}}>
            <Typography variant="body2">Medicine</Typography>
            <Typography fontWeight="bold">{PreviewDetails.medicineName}</Typography>
          </Grid>
          <Grid size={{xs:6}}>
            <Typography variant="body2">Reason</Typography>
            <Typography fontWeight="bold">{PreviewDetails.reason}</Typography>
          </Grid>
          <Grid size={{xs:6}}>
            <Typography variant="body2">Suggested By</Typography>
            <Typography fontWeight="bold">{PreviewDetails.suggestedBy}</Typography>
          </Grid>
          <Grid size={{xs:6}}>
            <Typography variant="body2">Buying Place</Typography>
            <Typography fontWeight="bold">{PreviewDetails.buyingPlace}</Typography>
          </Grid>
          <Grid size={{xs:6}}>
            <Typography variant="body2">Contact</Typography>
            <Typography fontWeight="bold">{PreviewDetails.buyingContact || "N/A"}</Typography>
          </Grid>
          <Grid size={{xs:12}}>
            <Typography variant="body2">Notes</Typography>
            <Typography fontWeight="bold">{PreviewDetails.notes || "N/A"}</Typography>
          </Grid>
        </Grid>
        <Box mt={2}>
          <Typography variant="caption" color="text.secondary">
            Date: {PreviewDetails.date}
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AnimalCarePreview;
