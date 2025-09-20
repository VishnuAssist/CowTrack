import { Dialog, DialogContent, DialogTitle, Grid, Typography } from '@mui/material'
import  { FC } from 'react'
import { Store } from '../../models/Setting';

interface Props {
    preview:boolean,
    closePreview:()=>void,
    PreviewDetails:Store | null;
}
const PreviewStore:FC<Props> = ({preview,closePreview,PreviewDetails}) => {
    console.log("hello",PreviewDetails);
    
  return (
    <>
    <Dialog open={preview} onClose={closePreview}>
        <DialogTitle sx={{color:"darkblue"}}>
            Store Details
        </DialogTitle>
        <DialogContent>
            <Grid container spacing={2}>
                <Grid item md={6}>
                    <Typography>Store Code :</Typography>
                </Grid>
                <Grid item md={6}>
                       <Typography>{PreviewDetails?.storecode}</Typography> 
                </Grid>
                
                <Grid item md={6}>
                    <Typography>Country :</Typography>
                </Grid>
                <Grid item md={6}>
                       <Typography>{PreviewDetails?.country}</Typography> 
                </Grid>
                <Grid item md={6}>
                    <Typography>Status :</Typography>
                </Grid>
                <Grid item md={6}>
                       <Typography>{PreviewDetails?.status}</Typography> 
                </Grid>
            </Grid>
        </DialogContent>
    </Dialog>
    </>
  )
}

export default PreviewStore