import { Box, Grid, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, setPaymentMethodFilter } from '../../slice/ExpenseTrackerSlice';

const ExpenseSearch = () => {
  const dispatch = useDispatch();
  const { searchTerm, paymentMethodFilter } = useSelector((state: any) => state.expenseTracker);

  return (
    <Box margin={2}>
      <Grid container spacing={2} alignItems="center" justifyContent="flex-end">
        <Grid size={{xs:12,sm:6,md:3}}>
          <TextField
            label="Search by Place"
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid size={{xs:12,sm:6,md:3}}>
          <FormControl fullWidth size="small">
            <InputLabel>Payment Method</InputLabel>
            <Select
              value={paymentMethodFilter}
              onChange={(e) => dispatch(setPaymentMethodFilter(e.target.value))}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="cash">Cash</MenuItem>
              <MenuItem value="card">Card</MenuItem>
              <MenuItem value="upi">UPI</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExpenseSearch;
