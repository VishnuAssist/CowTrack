import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from '@mui/material';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  addAnimalCare,
  updateAnimalCare,
} from '../../slice/AnimalCareSlice';
import { AnimalCareType, AnimalType } from '../../models/AnimalCareType';
import CustomInput from '../../components/FormComponents/CustomInput';
import CustomSelect from '../../components/FormComponents/CustomSelect';

interface Props {
  form: boolean;
  closeForm: () => void;
  initialAnimalCare: AnimalCareType | null;
}

const AnimalCareForm: FC<Props> = ({ form, closeForm, initialAnimalCare }) => {
  const defaultData: AnimalCareType = {
    id: 0,
    animalType: 'cow',
    medicineName: '',
    reason: '',
    suggestedBy: '',
    buyingPrice: 0,
    buyingPlace: '',
    buyingContact: '',
    notes: '',
    date: '',
    medicineType: '',
  };

  const { register, handleSubmit, reset } = useForm<AnimalCareType>({
    values: initialAnimalCare || defaultData,
  });

  const dispatch = useDispatch();

  const submitData = (data: AnimalCareType) => {
    if (initialAnimalCare) {
      dispatch(updateAnimalCare(data));
    } else {
      dispatch(addAnimalCare(data));
    }
    reset(defaultData);
    closeForm();
  };

  useEffect(() => {
    reset(initialAnimalCare || defaultData);
  }, [initialAnimalCare, reset]);

  return (
    <Dialog open={form} onClose={closeForm} maxWidth="md" fullWidth>
      <DialogTitle sx={{ color: 'darkblue' }}>
        {initialAnimalCare ? 'Update Animal Care' : 'New Animal Care'}
      </DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <form onSubmit={handleSubmit(submitData)}>
          <Grid container spacing={2}>
            <Grid size={{xs:12,md:4}}>
              <CustomSelect
                label="Animal Type"
                name="animalType"
                options={[
                  { value: 'cow', label: 'Cow' },
                  { value: 'goat', label: 'Goat' },
                ]}
                register={register}
                defaultValue={initialAnimalCare?.animalType || 'cow'}
                required
                fullWidth
              />
            </Grid>

            <Grid size={{xs:12,md:4}}>
              <CustomInput
                label="Medicine Name"
                name="medicineName"
                register={register}
                required
              />
            </Grid>

            <Grid size={{xs:12,md:4}}>
              <CustomInput
                label="Reason"
                name="reason"
                register={register}
                required
              />
            </Grid>

            <Grid size={{xs:12,md:4}}>
              <CustomInput
                label="Suggested By"
                name="suggestedBy"
                register={register}
                required
              />
            </Grid>

            <Grid size={{xs:12,md:4}}>
              <CustomInput
                label="Buying Price"
                name="buyingPrice"
                type="number"
                register={register}
                required
              />
            </Grid>

            <Grid size={{xs:12,md:4}}>
              <CustomInput
                label="Buying Place"
                name="buyingPlace"
                register={register}
                required
              />
            </Grid>

            <Grid size={{xs:12,md:4}}>
              <CustomInput
                label="Buying Contact"
                name="buyingContact"
                register={register}
              />
            </Grid>

            <Grid size={{xs:12,md:4}}>
              <CustomInput
                label="Date"
                name="date"
                type="date"
                register={register}
                required
              />
            </Grid>

            <Grid size={{xs:12,md:4}}>
              <CustomInput
                label="Medicine Type"
                name="medicineType"
                register={register}
              />
            </Grid>

            <Grid size={{xs:12,md:12}}>
              <CustomInput
                label="Notes"
                name="notes"
                register={register}
                // multiline
                // rows={3}
              />
            </Grid>
          </Grid>

          <DialogActions>
            <Button type="submit" variant="contained" color="primary">
              {initialAnimalCare ? 'Update' : 'Save'}
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AnimalCareForm;
