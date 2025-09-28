import { FC } from "react";
import { Dialog, DialogContent, DialogTitle, Typography, Grid, Box } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { AnimalDetailsType } from "../../models/AnimalDetailsType";

interface Props {
  preview: boolean;
  closePreview: () => void;
  PreviewDetails: AnimalDetailsType | null;
}

const dialogVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 }
};

const AnimalDetailPreview: FC<Props> = ({ preview, closePreview, PreviewDetails }) => {
  if (!PreviewDetails) return null;

  return (
    <AnimatePresence>
      {preview && (
        <Dialog
          open={preview}
          onClose={closePreview}
          maxWidth="md"
          fullWidth
          PaperComponent={motion.div}
          PaperProps={{ variants: dialogVariants, initial: "hidden", animate: "visible", exit: "exit" } as any}
        >
          <DialogTitle>Animal Preview</DialogTitle>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid size={{xs:6}}>
                <Typography><strong>Name:</strong> {PreviewDetails.animalName}</Typography>
                <Typography><strong>ID:</strong> {PreviewDetails.animalId}</Typography>
                <Typography><strong>Type:</strong> {PreviewDetails.animalType}</Typography>
                <Typography><strong>Date of Arrival:</strong> {PreviewDetails.dateOfArrival}</Typography>
                <Typography><strong>From:</strong> {PreviewDetails.fromPlace}</Typography>
              </Grid>
              <Grid size={{xs:6}}>
                <Typography><strong>Weight:</strong> {PreviewDetails.weight || "N/A"} kg</Typography>
                <Typography><strong>Health Status:</strong> {PreviewDetails.healthStatus || "N/A"}</Typography>
                <Typography><strong>Milk Production:</strong> {PreviewDetails.milkProduction || "N/A"} L/day</Typography>
                <Typography><strong>Notes:</strong> {PreviewDetails.notes || "N/A"}</Typography>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default AnimalDetailPreview;
