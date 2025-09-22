import { useForm } from "react-hook-form";
import { useAppDispatch } from "src/store/configureStore";
import { addContact, updateContact } from "../../slice/ContactDeatilsSlice";
import { ContactDetailsType } from "../../models/ContactDetailsType";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Grid,
} from "@mui/material";

interface ContactFormProps {
  open: boolean;
  onClose: () => void;
  initialContact?: ContactDetailsType | null;
}

export default function ContactForm({ open, onClose, initialContact }: ContactFormProps) {
  const dispatch = useAppDispatch();

  const { register, handleSubmit, reset } = useForm<ContactDetailsType>({
    defaultValues: initialContact || {
      id: Date.now(),
      name: "",
      role: "Farmer",
      phoneNumber: "",
      email: "",
      native: "",
      dateAdded: new Date().toISOString(),
      purpose: undefined,
      notes: "",
    },
  });

  const onSubmit = (data: ContactDetailsType) => {
    if (initialContact) {
      dispatch(updateContact(data));
    } else {
      dispatch(addContact(data));
    }
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{initialContact ? "Edit Contact" : "Add Contact"}</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid size={{xs:12}}>
              <TextField label="Name" fullWidth {...register("name", { required: true })} />
            </Grid>
            <Grid size={{xs:12}}>
              <TextField select label="Role" fullWidth {...register("role", { required: true })}>
                <MenuItem value="Farmer">Farmer</MenuItem>
                <MenuItem value="Visitor">Visitor</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
              </TextField>
            </Grid>
            <Grid size={{xs:12}}>
              <TextField label="Phone" fullWidth {...register("phoneNumber", { required: true })} />
            </Grid>
            <Grid size={{xs:12}}>
              <TextField label="Email" fullWidth {...register("email")} />
            </Grid>
            <Grid size={{xs:12}}>
              <TextField label="Native" fullWidth {...register("native")} />
            </Grid>
            <Grid size={{xs:12}}>
              <TextField label="Purpose" fullWidth {...register("purpose")} />
            </Grid>
            <Grid size={{xs:12}}>
              <TextField label="Notes" fullWidth multiline rows={3} {...register("notes")} />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            {initialContact ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
