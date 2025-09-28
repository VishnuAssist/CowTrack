import { Card, Divider } from "@mui/material";
import AnimalDetailTable from "./AnimalDetailTable";
import AnimalDetailSearch from "./AnimalDetailSearch";

const AnimalDetails = () => {
  return (
    <Card>
      <AnimalDetailSearch />
      <Divider />
      <AnimalDetailTable />
    </Card>
  );
};

export default AnimalDetails;
