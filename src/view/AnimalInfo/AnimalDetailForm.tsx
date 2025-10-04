import { FC, useEffect } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CustomInput from '../../components/FormComponents/CustomInput';
import CustomSelect from '../../components/FormComponents/CustomSelect';
import { addAnimal, updateAnimal } from '../../slice/AnimalDetailsSlice';
import {
  AnimalDetailsType,
  AnimalType,
  Gender,
  HealthStatus
} from '../../models/AnimalDetailsType';

interface Props {
  form: boolean;
  closeForm: () => void;
  initialAnimal: AnimalDetailsType | null;
}

const AnimalDetailForm: FC<Props> = ({ form, closeForm, initialAnimal }) => {
  const defaultData: AnimalDetailsType = {
    id: 0,
    animalId: '',
    animalName: '',
    animalType: 'cow',
    dateOfArrival: '',
    fromPlace: '',

    lastInjectionDate: '',
    lastInjectionBy: '',
    lastBirthDate: '',
    lastBirthGender: undefined,
    lastBirthCount: undefined,
    monthsToNextBirth: undefined,

    breed: '',
    weight: undefined,
    healthStatus: 'healthy',
    feedPreference: '',
    milkProduction: undefined,
    notes: '',
    vaccinationSchedule: []
  };

  const { register, handleSubmit, reset, control } = useForm<AnimalDetailsType>(
    {
      defaultValues: initialAnimal || defaultData
    }
  );

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'vaccinationSchedule'
  });

  const dispatch = useDispatch();

  const submitData = (data: AnimalDetailsType) => {
    if (initialAnimal) {
      dispatch(updateAnimal(data));
    } else {
      dispatch(addAnimal(data));
    }
    reset();
    closeForm();
  };

  useEffect(() => reset(initialAnimal || defaultData), [initialAnimal, reset]);

  return (
    <Dialog open={form} onClose={closeForm} maxWidth="lg" fullWidth>
      <DialogTitle>
        {initialAnimal ? 'Update Animal' : 'New Animal'}
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(submitData)}>
          <Grid container spacing={2}>
            {/* Basic Info */}
            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput
                label="Animal Name"
                name="animalName"
                register={register}
                required
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput
                label="Animal ID"
                name="animalId"
                register={register}
                required
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <CustomSelect
                label="Animal Type"
                name="animalType"
                options={[
                  { value: 'cow', label: 'Cow' },
                  { value: 'goat', label: 'Goat' },
                  { value: 'buffalo', label: 'Buffalo' }
                ]}
                register={register}
                required
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput
                label="Date of Arrival"
                name="dateOfArrival"
                type="date"
                register={register}
                required
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput
                label="From Place"
                name="fromPlace"
                register={register}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <CustomSelect
                label="Last Birth Gender"
                name="lastBirthGender"
                options={[
                  { value: 'male', label: 'Male' },
                  { value: 'female', label: 'Female' }
                ]}
                register={register}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput
                label="Last Injection Date"
                name="lastInjectionDate"
                type="date"
                register={register}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput
                label="Last Injection By"
                name="lastInjectionBy"
                register={register}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput
                label="Last Birth Date"
                name="lastBirthDate"
                type="date"
                register={register}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput
                label="Last Birth Count"
                name="lastBirthCount"
                type="number"
                register={register}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput
                label="Months to Next Birth"
                name="monthsToNextBirth"
                type="number"
                register={register}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput label="Breed" name="breed" register={register} />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput
                label="Weight (kg)"
                name="weight"
                type="number"
                register={register}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <CustomSelect
                label="Health Status"
                name="healthStatus"
                options={[
                  { value: 'healthy', label: 'Healthy' },
                  { value: 'sick', label: 'Sick' },
                  { value: 'quarantine', label: 'Quarantine' }
                ]}
                register={register}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput
                label="Feed Preference"
                name="feedPreference"
                register={register}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput
                label="Milk Production (L/day)"
                name="milkProduction"
                type="number"
                register={register}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <CustomInput
                label="Notes"
                name="notes"
                register={register}
                // multiline
                // rows={2}
              />
            </Grid>

            {/* Vaccination Schedule */}
            <Grid size={{ xs: 12 }} style={{ marginTop: 16 }}>
              <h4>Vaccination Schedule</h4>
            </Grid>
            {fields.map((field, index) => (
              <Grid container spacing={2} key={field.id}>
                <Grid size={{ xs: 4 }}>
                  <CustomInput
                    label="Date"
                    name={`vaccinationSchedule.${index}.date`}
                    type="date"
                    register={register}
                    required
                  />
                </Grid>
                <Grid size={{ xs: 4 }}>
                  <CustomInput
                    label="Vaccine"
                    name={`vaccinationSchedule.${index}.vaccine`}
                    register={register}
                    required
                  />
                </Grid>
                <Grid size={{ xs: 3 }}>
                  <CustomInput
                    label="By"
                    name={`vaccinationSchedule.${index}.by`}
                    register={register}
                  />
                </Grid>
                <Grid size={{ xs: 1 }}>
                  <IconButton onClick={() => remove(index)}>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
            <Grid size={{ xs: 12 }}>
              <Button
                startIcon={<AddIcon />}
                variant="outlined"
                color="primary"
                onClick={() => append({ date: '', vaccine: '', by: '' })}
              >
                Add Vaccination
              </Button>
            </Grid>
          </Grid>

          <DialogActions>
            <Button type="submit" variant="contained" color="primary">
              {initialAnimal ? 'Update' : 'Save'}
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AnimalDetailForm;
