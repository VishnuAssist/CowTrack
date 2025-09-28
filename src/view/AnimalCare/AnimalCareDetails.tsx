import { Card, Divider } from "@mui/material";
import AnimalCareSearch from "./AnimalCareSearch";
import AnimalCareTable from "./AnimalCaretable";

const AnimalCareDetails = () => {
  return (
    <Card>
      <AnimalCareSearch />
      <Divider />
      <AnimalCareTable />
    </Card>
  );
};

export default AnimalCareDetails;
