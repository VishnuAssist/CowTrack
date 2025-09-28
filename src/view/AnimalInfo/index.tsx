import { Helmet } from "react-helmet-async";
import PageHeader from "src/components/PageHeader";
import PageTitleWrapper from "src/components/PageTitleWrapper";

import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import AnimalDetailForm from "./AnimalDetailForm";
import AnimalDetails from "./AnimalDetails";
import Footer from "src/components/Footer";

const Index = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [form, setForm] = useState(false);
  const openForm = () => setForm(true);
  const closeForm = () => setForm(false);

  return (
    <div>
      <Helmet>
        <title>Animal Details</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader title="Animals" btntitle="Add Animal" icon={""} onActionClick={openForm} />
      </PageTitleWrapper>

      <Box sx={{ maxWidth: "95%", mx: isMobile ? 1 : 4 }}>
        <Grid container spacing={0}>
          <Grid  size={{xs:12}}>
            <AnimalDetails />
          </Grid>
        </Grid>
      </Box>

      <Footer />
      <AnimalDetailForm form={form} closeForm={closeForm} initialAnimal={null} />
    </div>
  );
};

export default Index;
