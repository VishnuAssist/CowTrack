import { Helmet } from "react-helmet-async";
import PageHeader from "../../components/PageHeader";
import PageTitleWrapper from "../../components/PageTitleWrapper";

import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseDetails from "./ExpenseDetails";
import Footer from "../../components/Footer";

const ExpenseIndex = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formOpen, setFormOpen] = useState(false);
  const openForm = () => setFormOpen(true);
  const closeForm = () => setFormOpen(false);

  return (
    <div>
      <Helmet>
        <title>Expense Tracker</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader
          title="Expenses"
          btntitle="Add Expense"
          icon={""}
          onActionClick={openForm}
        />
      </PageTitleWrapper>

      <Box sx={{ maxWidth: "95%", mx: isMobile ? 1 : 4 }}>
        <Grid container spacing={2}>
          <Grid size={{xs:12}}>
            <ExpenseDetails />
          </Grid>
        </Grid>
      </Box>
      <Footer />
      <ExpenseForm form={formOpen} closeForm={closeForm} initialExpense={null} />
    </div>
  );
};

export default ExpenseIndex;
