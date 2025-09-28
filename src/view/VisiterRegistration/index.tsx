import { Helmet } from "react-helmet-async";
import PageHeader from "src/components/PageHeader";
import PageTitleWrapper from "src/components/PageTitleWrapper";

import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import VisitorForm from "./VisitorForm";
import VisitorDetails from "./VisitorDetails";
import Footer from "src/components/Footer";

const index = () => {
    const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


    const [form, setForm] = useState(false);
    const openForm = () => {
      setForm(true);
    };
    const closeForm = () => {
      setForm(false);
    };
  return (
    <div>
      <Helmet>
        <title>Visitor Registration</title>
      </Helmet>
         <PageTitleWrapper>
      <PageHeader title ="Visitor Registration" btntitle="Add Visitor" icon={""} onActionClick={openForm}/>
      </PageTitleWrapper>
    

         <Box sx={{ maxWidth: "95%", mx: isMobile ? 1 : 4 }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={0}
        >
          <Grid size={{xs:12}}>
             <VisitorDetails/>
        </Grid>
        </Grid>
      </Box>
      <Footer/>
      <VisitorForm form={form} closeForm={closeForm} initialVisitor={null} />
    </div>
  )
}

export default index
