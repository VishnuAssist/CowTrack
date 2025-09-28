import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid } from '@mui/material';
import React, { FC } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import CustomInput from 'src/components/FormComponents/CustomInput';
import CustomSelect from 'src/components/FormComponents/CustomSelect';
import { VisitorRegistrationType } from 'src/models/VisitorRegistrationType';
import { addVisitor, updateVisitor } from 'src/slice/VisitorSlice';


interface Props {
  form: boolean;
  closeForm: () => void;
  initialVisitor: VisitorRegistrationType | null;
}

const VisitorForm:FC<Props> = ({form,closeForm,initialVisitor}) => {
const dispatch = useDispatch();
    const {register ,handleSubmit ,reset } =useForm({
        values:initialVisitor
    })


    const submitData =(data :any)=>{
        if(initialVisitor){
            dispatch(updateVisitor(data))
        }else{
            dispatch(addVisitor(data));
        }
        reset();
        closeForm();
    }

  return (
    <div>
  <Dialog open={form} onClose={closeForm} maxWidth="lg" fullWidth>
        <DialogTitle sx={{ color: 'darkblue' }}>
          {initialVisitor ? 'Update Visitor' : 'New Visitor'}
        </DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>
          <form onSubmit={handleSubmit(submitData)}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <CustomInput
                  label=" Name"
                  name="name"
                  register={register}
                  required
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <CustomInput
                  label=" Native"
                  name="native"
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
                  label="Phone Number"
                  name="contact"
                  register={register}
                  required
                />
              </Grid>
           
              <Grid size={{ xs: 12, md: 4 }}>
                <CustomInput
                  label="purpose"
                  name="purpose"
                  register={register}
                  required
                />
              </Grid>
           
              <Grid size={{ xs: 12, md: 4 }}>
                <CustomInput
                  label="theyProvide"
                  name="theyProvide"
                  register={register}
                  required
                />
              </Grid>
           
              <Grid size={{ xs: 12, md: 4 }}>
                <CustomInput
                  label="Request "
                  name="theyNeed"
                  register={register}
                  required
                />
              </Grid>
           
              <Grid size={{ xs: 12, md: 4 }}>
                <CustomInput
                  label="Date Time"
                  name="dateTime"
                  register={register}
                  required
                />
              </Grid>
           
              <Grid size={{ xs: 12, md: 4 }}>
                <CustomInput
                  label="address"
                  name="address"
                  register={register}
                  required
                />
              </Grid>
           
              <Grid size={{ xs: 12, md: 4 }}>
                <CustomInput
                  label="companyName"
                  name="companyName"
                  register={register}
                  required
                />
              </Grid>
           
              <Grid size={{ xs: 12, md: 4 }}>
                <CustomInput
                  label="notes"
                  name="notes"
                  register={register}
                  required
                />
              </Grid>
           

            
             
             
            </Grid>

            <DialogActions>
              <Button type="submit" variant="contained" color="primary">
                {initialVisitor ? 'Update' : 'Save'}
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default VisitorForm
