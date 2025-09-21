import { Helmet } from "react-helmet-async";
import PageHeader from "src/components/PageHeader";
import PageTitleWrapper from "src/components/PageTitleWrapper";
import FarmerTable from "./FarmerTable";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import FarmerForm from "./FarmerForm";

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
        <title>Payment</title>
      </Helmet>
         <PageTitleWrapper>
      <PageHeader title ="Farmer" btntitle="Add Farmer" icon={""} onActionClick={openForm}/>
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
             <FarmerTable/>
        </Grid>
        </Grid>
      </Box>
      <FarmerForm form={form} closeForm={closeForm} initialFarmer={null} />
    </div>
  )
}

export default index
