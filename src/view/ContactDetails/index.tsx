import { useState } from "react";
import { Helmet } from "react-helmet-async";
import PageHeader from "../../components/PageHeader";
import PageTitleWrapper from "../../components/PageTitleWrapper";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";

import { selectContacts } from "../../selectors/contactsSelectors";
import { useAppSelector } from "../../store/configureStore";

export default function ContactPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const contacts = useAppSelector(selectContacts);

  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);

  const handleEdit = (id: number) => {
    setEditId(id);
    setOpen(true);
  };

  return (
    <div>
      <Helmet>
        <title>Contact Details</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader
          title="Contact Details"
          btntitle="Add Contact"
          icon=""
          onActionClick={() => {
            setEditId(null);
            setOpen(true);
          }}
        />
      </PageTitleWrapper>

      <Box sx={{ maxWidth: "95%", mx: isMobile ? 1 : 4 }}>
        <Grid container>
          <Grid size={{xs:12}}>
            <ContactDetails onEdit={handleEdit} />
          </Grid>
        </Grid>
      </Box>

      <ContactForm
        open={open}
        onClose={() => setOpen(false)}
        initialContact={contacts.find((c) => c.id === editId) || null}
      />
    </div>
  );
}
