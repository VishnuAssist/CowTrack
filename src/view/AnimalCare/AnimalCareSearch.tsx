import {
  Box,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AnimalType } from "../../models/AnimalCareType";
import { setSearchTerm, setAnimalTypeFilter } from "../../slice/AnimalCareSlice";

const AnimalCareSearch = () => {
  const dispatch = useDispatch();
  const { searchTerm, animalTypeFilter } = useSelector(
    (state: any) => state.animalCare
  );


const handleFilterChange = (event: SelectChangeEvent) => {
  dispatch(
    setAnimalTypeFilter(event.target.value as AnimalType | "all")
  );
};

  return (
    <Box margin={2}>
      <Grid container spacing={2} alignItems="center" justifyContent="flex-end">
        <Grid size={{xs:12,sm:6,md:3}}>
          <TextField
            label="Search by Medicine"
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid size={{xs:12,sm:6,md:3}}>
          <FormControl fullWidth size="small">
            <InputLabel>Filter by Animal</InputLabel>
            <Select
              value={animalTypeFilter}
              label="Filter by Animal"
              onChange={handleFilterChange}
            >
              <MenuItem value="all">All Animals</MenuItem>
              <MenuItem value="cow">Cow</MenuItem>
              <MenuItem value="goat">Goat</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AnimalCareSearch;
