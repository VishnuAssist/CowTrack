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
  Tooltip,
} from "@mui/material";
import  { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addFarmer,updateFarmer,  } from "../../slice/FarmerSlice";
import { FarmerAddType } from "../../models/FarmerType";

interface Props {
  form: boolean;
  closeForm: () => void;
  initialFarmer: FarmerAddType | null;
}


const FarmerForm: FC<Props> = ({ form, closeForm, initialFarmer }) => {
  const data: FarmerAddType = {
    farmerName: "",
    age:0,
  
    id: 0,
  };

  const { register, handleSubmit, reset, setValue, watch } = useForm();
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(true);


  const submitData = (data: any) => {
    
    data.isActive = isActive;
    console.log("statusss",data)
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

  useEffect(() => {
    if (initialFarmer) {
      setValue("farmerName", initialFarmer.farmerName);
      setValue("age", initialFarmer.age);
      
      setValue("id", initialFarmer.id);
    }
  }, [initialFarmer, setValue]);

  


  return (
    <>
      <Dialog open={form} onClose={closeForm} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ color: "darkblue" }}>
          {initialFarmer ? "Update Farmer" : "New Farmer"}
        </DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
          <form onSubmit={handleSubmit(submitData)}>
            <Grid container spacing={2}>
              
          
              <Grid size={{xs:12,md:12}}>
                <TextField
                  type="text"
                  id="farmerName"
                  label="farmerName"
                  {...register("farmerName")}
                  fullWidth
                />
              </Grid>
              <Grid size={{xs:12,md:12}}>
                <TextField
                  type="number"
                  id="age"
                  label="age"
                  {...register("age")}
                  fullWidth
                />
              </Grid>
             
            </Grid>

            <DialogActions>
              <Button type="submit" variant="contained" color="primary">
                {initialFarmer ? "Update" : "Save"}
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FarmerForm;
