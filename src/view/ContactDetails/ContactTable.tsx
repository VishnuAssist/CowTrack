import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  TablePagination
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useAppDispatch, useAppSelector } from 'src/store/configureStore';
import {
  deleteContact,
  setCurrentPage,
  setPageSize
} from '../../slice/ContactDeatilsSlice';
import {
  selectFilteredContacts,
  selectPaginatedContacts,
  selectCurrentPage,
  selectPageSize
} from '../../selectors/contactsSelectors';
import { AnimatePresence, motion } from 'framer-motion';
import { ContactDetailsType } from 'src/models/ContactDetailsType';
import { useState } from 'react';
import ContactForm from './ContactForm';
import ContactPreview from './ContactPreview';

interface ContactTableProps {
  onEdit: (contactId: number) => void;
}

export default function ContactTable({ onEdit }: ContactTableProps) {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectPaginatedContacts);
  const filteredContacts = useAppSelector(selectFilteredContacts);
  const currentPage = useAppSelector(selectCurrentPage);
  const pageSize = useAppSelector(selectPageSize);

  // handle pagination
  const handleChangePage = (_: unknown, newPage: number) => {
    dispatch(setCurrentPage(newPage + 1)); // MUI uses 0-based index, we use 1-based
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setPageSize(parseInt(event.target.value, 10)));
    dispatch(setCurrentPage(1));
  };

  // this is the edit function
  const [update, setUpdate] = useState(false);
  const [datatoedit, setDataToEdit] = useState<ContactDetailsType | null>(null);
  const openUpdate = (data: ContactDetailsType) => {
    setDataToEdit(data);
    setUpdate(true);
  };
  const closeUpadate = () => {
    setUpdate(false);
  };

  // this is the preview function
  const [preview, setPreview] = useState(false);
  const [previewdata, setPreviewData] = useState<ContactDetailsType | null>(
    null
  );
  const openPreview = (data: ContactDetailsType) => {
    setPreview(true);
    setPreviewData(data);
  };
  const closePreview = () => {
    setPreview(false);
  };

  return (
    <>
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
              >
                <TableCell>{c.name}</TableCell>
                <TableCell>{c.role}</TableCell>
                <TableCell>{c.phoneNumber}</TableCell>
                <TableCell>{c.email}</TableCell>
                <TableCell>{c.native}</TableCell>
                <TableCell>
                  <IconButton
                    size="small"
                    color="primary"
                    aria-label="View"
                    onClick={() => openPreview(c)}
                  >
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton onClick={() => openUpdate(c)}>
                    <Edit color="warning" />
                  </IconButton>
                  <IconButton onClick={() => dispatch(deleteContact(c.id))}>
                    <Delete color="error" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </AnimatePresence>
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={filteredContacts.length} // total after filtering
        page={currentPage - 1} // convert back to 0-based
        onPageChange={handleChangePage}
        rowsPerPage={pageSize}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />

      <ContactForm
        open={update}
        onClose={closeUpadate}
        initialContact={datatoedit}
      />
            <ContactPreview
        preview={preview}
        closePreview={closePreview}
        PreviewDetails={previewdata}
      />
    </>
  );
}
