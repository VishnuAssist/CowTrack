import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../store/configureStore';
import { addContact, updateContact } from '../../slice/ContactDeatilsSlice';
import { ContactDetailsType } from '../../models/ContactDetailsType';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Grid
} from '@mui/material';
import CustomInput from '../../components/FormComponents/CustomInput';
import CustomSelect from '../../components/FormComponents/CustomSelect';
import { useEffect } from 'react';

interface ContactFormProps {
  open: boolean;
  onClose: () => void;
  initialContact?: ContactDetailsType | null;
}

export default function ContactForm({
  open,
  onClose,
  initialContact
}: ContactFormProps) {
  const data: ContactDetailsType = {
    id: 0,
    name: '',
    role: 'farmer', // fixed case
    phoneNumber: '',
    email: '',
    native: '',

    purpose: '',
    notes: '',
    farmEquipmentOwned: ''
  };
  const dispatch = useAppDispatch();

  const { register, handleSubmit, reset } = useForm<ContactDetailsType>();

  const onSubmit = (data: ContactDetailsType) => {
    if (initialContact) {
      dispatch(updateContact(data));
    } else {
      dispatch(addContact(data));
    }
    reset();
    onClose();
  };

  useEffect(() => {
    reset(initialContact || data);
  }, [initialContact, reset]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        {initialContact ? 'Edit Contact' : 'Add Contact'}
      </DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput
                label="Name"
                name="name"
                register={register}
                required
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput
                label="Phone Number"
                name="phoneNumber"
                register={register}
                required
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput
                label="Email"
                name="email"
                register={register}
                required
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput
                label="Native"
                name="native"
                register={register}
                required
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput
                label="Purpose"
                name="purpose"
                register={register}
                required
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput
                label="Notes"
                name="notes"
                register={register}
                required
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <CustomSelect
                label="Role"
                name="role"
                options={[
                  { value: 'farmer', label: 'Farmer' },
                  { value: 'Visitor', label: 'Visitor' },
                  { value: 'Doctor', label: 'Doctor' },
                  { value: 'common person', label: 'common person' }
                ]}
                register={register}
                defaultValue={initialContact?.role || 'farmer'}
                required
                fullWidth
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput
                label="Farm Equipment  "
                name="farmEquipmentOwned"
                register={register}
                required
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            {initialContact ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
