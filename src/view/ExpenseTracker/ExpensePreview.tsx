import { Dialog, DialogContent, DialogTitle, Typography, Grid } from '@mui/material';

interface Props {
  preview: boolean;
  closePreview: () => void;
  PreviewDetails: any;
}

const ExpensePreview = ({ preview, closePreview, PreviewDetails }: Props) => {
  if (!PreviewDetails) return null;
  return (
    <Dialog open={preview} onClose={closePreview} maxWidth="sm" fullWidth>
      <DialogTitle>Expense Preview</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid  size={{xs:6}}><Typography><strong>Place:</strong> {PreviewDetails.place}</Typography></Grid>
          <Grid size={{xs:6}}><Typography><strong>Amount:</strong> {PreviewDetails.amount}</Typography></Grid>
          <Grid size={{xs:6}}><Typography><strong>Category:</strong> {PreviewDetails.category}</Typography></Grid>
          <Grid size={{xs:6}}><Typography><strong>Payment:</strong> {PreviewDetails.paymentMethod}</Typography></Grid>
          <Grid size={{xs:12}}><Typography><strong>Notes:</strong> {PreviewDetails.notes}</Typography></Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ExpensePreview;
