import { Helmet } from "react-helmet-async";
import PageHeader from "../../components/PageHeader";
import PageTitleWrapper from "../../components/PageTitleWrapper";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import AnimalCareDetails from "./AnimalCareDetails";
import Footer from "../../components/Footer";
import AnimalCareForm from "./AnimalCareForm"; // You can add similar form like FarmerForm

const Index = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [form, setForm] = useState(false);
  const openForm = () => setForm(true);
  const closeForm = () => setForm(false);

  return (
    <div>
      <Helmet>
        <title>Animal Care</title>
      </Helmet>

      <PageTitleWrapper>
        <PageHeader
          title="Animal Care"
          btntitle="Add Care Record"
          icon={""}
          onActionClick={openForm}
        />
      </PageTitleWrapper>

      <Box sx={{ maxWidth: "95%", mx: isMobile ? 1 : 4 }}>
        <Grid container spacing={0}>
          <Grid size={{xs:12}}>
            <AnimalCareDetails />
          </Grid>
        </Grid>
      </Box>

      <Footer />
      <AnimalCareForm form={form} closeForm={closeForm} initialAnimalCare={null} />
    </div>
  );
};

export default Index;
