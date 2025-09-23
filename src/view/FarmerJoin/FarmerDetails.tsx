import { Card, Divider } from '@mui/material';
import FarmerTable from './FarmerTable';
import FarmerSearch from './FarmerSearch';

const FarmerDetails = () => {
  return (
    <Card>
      <FarmerSearch />
      <Divider />
      <FarmerTable />
    </Card>
  );
};

export default FarmerDetails;
