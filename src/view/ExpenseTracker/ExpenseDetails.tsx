import { Card, Divider } from '@mui/material';
import ExpenseTable from './ExpenseTable';
import ExpenseSearch from './ExpenseSearch';

const ExpenseDetails = () => {
  return (
    <Card>
      <ExpenseSearch />
      <Divider />
      <ExpenseTable />
    </Card>
  );
};

export default ExpenseDetails;
