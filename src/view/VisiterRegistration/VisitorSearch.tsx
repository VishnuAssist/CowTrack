import { Box, Grid, TextField, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../slice/VisitorSlice';

const VisitorSearch = () => {
const dispatch =useDispatch();
    const {searchTerm} =useSelector((state:any) =>state.visitor)
  return (
    <div>
      <Box margin={2}>
        <Grid container spacing={2} alignItems="center" justifyContent={"flex-end"}>
          <Grid size={{xs:12,sm:6,md:3}}>
            <TextField
              label="Search by Name"
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
              size="small"
              fullWidth
            />
          </Grid>
        
        </Grid>
      </Box>
    </div>
  )
}

export default VisitorSearch
