import { Box, Grid, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, setAnimalTypeFilter } from "../../slice/AnimalDetailsSlice";

const AnimalDetailSearch = () => {
  const dispatch = useDispatch();
  const { searchTerm, animalTypeFilter } = useSelector((state:any)=>state.animal);

  return (
    <Box margin={2}>
      <Grid container spacing={2} justifyContent="flex-end">
        <Grid size={{xs:12,sm:6,md:3}}>
          <TextField label="Search by Name" value={searchTerm} onChange={(e)=>dispatch(setSearchTerm(e.target.value))} fullWidth size="small" />
        </Grid>
        <Grid size={{xs:12,sm:6,md:3}}>
          <FormControl fullWidth size="small">
            <InputLabel>Animal Type</InputLabel>
            <Select value={animalTypeFilter} onChange={(e)=>dispatch(setAnimalTypeFilter(e.target.value as any))}>
              <MenuItem value="all">All Types</MenuItem>
              <MenuItem value="cow">Cow</MenuItem>
              <MenuItem value="goat">Goat</MenuItem>
              <MenuItem value="buffalo">Buffalo</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AnimalDetailSearch;
