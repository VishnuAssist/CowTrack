import { Box, Grid, TextField, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, setRoleFilter } from '../../slice/FarmerSlice';

const FarmerSearch = () => {
  const dispatch = useDispatch();
  const { searchTerm, roleFilter } = useSelector((state: any) => state.farmer);

  const handleRoleFilterChange = (event: SelectChangeEvent) => {
    dispatch(setRoleFilter(event.target.value));
  };

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
          <Grid size={{xs:12,sm:6,md:3}}>
            <FormControl fullWidth size="small">
              <InputLabel>Filter by Role</InputLabel>
              <Select
                value={roleFilter}
                label="Filter by Role"
                onChange={handleRoleFilterChange}
              >
                <MenuItem value="all">All Roles</MenuItem>
                <MenuItem value="farmer">Farmer</MenuItem>
                <MenuItem value="common person">Common Person</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default FarmerSearch;