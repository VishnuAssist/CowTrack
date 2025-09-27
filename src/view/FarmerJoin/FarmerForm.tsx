import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  Select,
  TextField,
  Tooltip
} from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addFarmer, updateFarmer } from '../../slice/FarmerSlice';
import { FarmerAddType } from '../../models/FarmerType';
import CustomInput from 'src/components/FormComponents/CustomInput';
import CustomSelect from 'src/components/FormComponents/CustomSelect';

interface Props {
  form: boolean;
  closeForm: () => void;
  initialFarmer: FarmerAddType | null;
}

const FarmerForm: FC<Props> = ({ form, closeForm, initialFarmer }) => {
  const data: FarmerAddType = {
    id: 0,

    age: 0,
    role: 'farmer',
    userName: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    phoneNumber: '',
    village: '',
    taluk: '',
    district: '',
    pincode: 0,
    experienceYears: 0,
    farmEquipmentOwned:''
  };

  const { register, handleSubmit, reset, setValue, watch } = useForm({
    values: initialFarmer
  });
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(true);

  const submitData = (data: any) => {
    data.isActive = isActive;
    console.log('statusss', data);
    if (initialFarmer) {
      dispatch(updateFarmer(data));
    } else {
      dispatch(addFarmer(data));
    }
    reset();
    closeForm();
  };

  useEffect(() => {
    reset(initialFarmer || data);
  }, [initialFarmer, reset]);

  // useEffect(() => {
  //   if (initialFarmer) {
  //     setValue('age', initialFarmer.age);
  //     setValue('district', initialFarmer.district);

  //     setValue('id', initialFarmer.id);
  //   }
  // }, [initialFarmer, setValue]);

  useEffect(() => {
    reset(initialFarmer || data);
  }, [initialFarmer, reset]);

  console.log('edit deatils', initialFarmer);
  return (
    <>
      <Dialog open={form} onClose={closeForm} maxWidth="lg" fullWidth>
        <DialogTitle sx={{ color: 'darkblue' }}>
          {initialFarmer ? 'Update Farmer' : 'New Farmer'}
        </DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>
          <form onSubmit={handleSubmit(submitData)}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <CustomInput
                  label="user Name"
                  name="userName"
                  register={register}
                  required
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <CustomInput
                  label="Password"
                  name="password"
                  register={register}
                  required
                />
              </Grid>
              {!initialFarmer && (
                <Grid size={{ xs: 12, md: 4 }}>
                  <CustomInput
                    label="Confirm Password "
                    name="confirmPassword"
                    register={register}
                    required
                  />
                </Grid>
              )}
              <Grid size={{ xs: 12, md: 4 }}>
                <CustomInput
                  label="First Name"
                  name="firstName"
                  register={register}
                  required
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <CustomInput
                  label="last Name"
                  name="lastName"
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
                  label="Date of Birth "
                  name="dob"
                  type="date"
                  register={register}
                  required
                />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <CustomInput
                  label="Age"
                  name="age"
                  type="number"
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
                  label="Village"
                  name="village"
                  register={register}
                  required
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <CustomInput
                  label="Taluk "
                  name="taluk"
                  register={register}
                  required
                />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <CustomInput
                  label="District "
                  name="district"
                  register={register}
                  required
                />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <CustomInput
                  label="Pincode "
                  name="pincode"
                  register={register}
                  required
                  type="number"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <CustomInput
                  label="Experience Years "
                  name="experienceYears"
                  register={register}
                  required
                  type="number"
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
              <Grid size={{ xs: 12, md: 4 }}>
                <CustomSelect
                  label="Role"
                  name="role"
                  options={[
                    { value: 'farmer', label: 'Farmer' },
                    { value: 'Admin', label: 'Admin' },
                    { value: 'common person', label: 'Common Person' }
                  ]}
                  register={register}
                  defaultValue={initialFarmer?.role || 'farmer'} // default value
                  required
                  fullWidth
                />
              </Grid>
            </Grid>

            <DialogActions>
              <Button type="submit" variant="contained" color="primary">
                {initialFarmer ? 'Update' : 'Save'}
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FarmerForm;
