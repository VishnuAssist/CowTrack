import { Card, Divider } from "@mui/material";
import ContactSearch from "./ContactSearch";
import ContactTable from "./ContactTable";

export default function ContactDetails({ onEdit }: { onEdit: (id: number) => void }) {
  return (
    <Card>
      <ContactSearch />
      <Divider />
      <ContactTable onEdit={onEdit} />
    </Card>
  );
}
