import { Dialog, DialogContent, DialogTitle, Grid, Typography } from '@mui/material'
import  { FC } from 'react'
import { FarmerAddType } from '../../models/FarmerType';

interface Props {
    preview:boolean,
    closePreview:()=>void,
    PreviewDetails:FarmerAddType | null;
}
const PreviewFarmer:FC<Props> = ({preview,closePreview,PreviewDetails}) => {
    console.log("hello",PreviewDetails);
    
  return (
    <>
    <Dialog open={preview} onClose={closePreview}>
        <DialogTitle sx={{color:"darkblue"}}>
            Farmer Details
        </DialogTitle>
        <DialogContent>
            <Grid container spacing={2}>
                <Grid size={{xs:6}}>
                    <Typography>name :</Typography>
                </Grid>
              <Grid size={{xs:6}}>
                       <Typography>{PreviewDetails?.farmerName}</Typography> 
                </Grid>
                
              <Grid size={{xs:6}}>
                    <Typography>Age :</Typography>
                </Grid>
              <Grid size={{xs:6}}>
                       <Typography>{PreviewDetails?.age}</Typography> 
                </Grid>

            </Grid>
        </DialogContent>
    </Dialog>
    </>
  )
}

export default PreviewFarmer