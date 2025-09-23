import { Table, TableBody, TableCell, TableHead, TableRow, IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "src/store/configureStore";
import { deleteContact } from "../../slice/ContactDeatilsSlice";
import { selectPaginatedContacts } from "../../selectors/contactsSelectors";
import { AnimatePresence, motion } from "framer-motion";

interface ContactTableProps {
  onEdit: (contactId: number) => void;
}

export default function ContactTable({ onEdit }: ContactTableProps) {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectPaginatedContacts);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Role</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Native</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <AnimatePresence>
        {contacts.map((c) => (
          <TableRow
          component={motion.tr}
          key={c.id}
            initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          transition={{duration:2}}
          >
            <TableCell>{c.name}</TableCell>
            <TableCell>{c.role}</TableCell>
            <TableCell>{c.phoneNumber}</TableCell>
            <TableCell>{c.email}</TableCell>
            <TableCell>{c.native}</TableCell>
            <TableCell>
              <IconButton onClick={() => onEdit(c.id)}>
                <Edit />
              </IconButton>
              <IconButton onClick={() => dispatch(deleteContact(c.id))}>
                <Delete />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
        </AnimatePresence>
      </TableBody>
    </Table>
  );
}
