import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  Typography
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion } from "framer-motion";

import { VisitorRegistrationType } from 'src/models/VisitorRegistrationType';
import VisitorForm from './VisitorForm';
import { removeVisitor, setSearchTerm, setCurrentPage, setItemsPerPage } from 'src/slice/VisitorSlice';
import PreviewVisitor from './VisitorPreview';


const VisitorTable = () => {
  const dispatch = useDispatch();
  const { visitorList, searchTerm, currentPage, itemsPerPage } = useSelector(
    (state: any) => state.visitor
  );

  // Filter visitors based on search term
  const filteredVisitors = visitorList.filter((visitor: VisitorRegistrationType) =>
    visitor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination calculations
  const totalItems = filteredVisitors.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedVisitors = filteredVisitors.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleChangePage = (event: unknown, newPage: number) => {
    dispatch(setCurrentPage(newPage + 1)); // MUI uses 0-based index
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setItemsPerPage(parseInt(event.target.value, 10)));
  };

  // Form for Add/Edit
  const [form, setForm] = useState(false);
  const [update, setUpdate] = useState(false);
  const [visitorToEdit, setVisitorToEdit] =
    useState<VisitorRegistrationType | null>(null);

  const openForm = () => setForm(true);
  const closeForm = () => setForm(false);

  const openUpdate = (data: VisitorRegistrationType) => {
    setVisitorToEdit(data);
    setUpdate(true);
  };
  const closeUpdate = () => setUpdate(false);

  // Preview state
  const [preview, setPreview] = useState(false);
  const [visitorPreview, setVisitorPreview] =
    useState<VisitorRegistrationType | null>(null);

  const openPreview = (data: VisitorRegistrationType) => {
    setVisitorPreview(data);
    setPreview(true);
  };
  const closePreview = () => setPreview(false);

  // Delete state
  const [alertDelete, setAlertDelete] = useState(false);
  const [visitorToDelete, setVisitorToDelete] =
    useState<VisitorRegistrationType | null>(null);

  const confirmDelete = () => {
    if (visitorToDelete) {
      dispatch(removeVisitor({ id: visitorToDelete.id }));
      setAlertDelete(false);
      setVisitorToDelete(null);
    }
  };
  const openDelete = (visitor: VisitorRegistrationType) => {
    setVisitorToDelete(visitor);
    setAlertDelete(true);
  };
  const closeDelete = () => {
    setAlertDelete(false);
    setVisitorToDelete(null);
  };

  return (
    <>
    

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Contact</TableCell>
            <TableCell>Purpose</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <AnimatePresence>
            {paginatedVisitors.length > 0 ? (
              paginatedVisitors.map((visitor: VisitorRegistrationType) => (
                <TableRow
                  key={visitor.id}
                  component={motion.tr}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <TableCell>{visitor.name}</TableCell>
                  <TableCell>{visitor.email}</TableCell>
                  <TableCell>{visitor.contact}</TableCell>
                  <TableCell>{visitor.purpose}</TableCell>
                  <TableCell>{visitor.dateTime}</TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={() => openPreview(visitor)}
                    >
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      color="warning"
                      onClick={() => openUpdate(visitor)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => openDelete(visitor)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center" sx={{ py: 3 }}>
                  <Typography variant="body1" color="textSecondary">
                    No visitors found.
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </AnimatePresence>
        </TableBody>
      </Table>

      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={totalItems}
        rowsPerPage={itemsPerPage}
        page={currentPage - 1}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      {/* Delete Confirmation */}
      <Dialog open={alertDelete} onClose={closeDelete} maxWidth="xs" fullWidth>
        <DialogContent>
          Are you sure you want to delete this visitor?
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDelete}>Cancel</Button>
          <Button color="error" onClick={confirmDelete}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      {/* Add Visitor */}
      <VisitorForm form={form} closeForm={closeForm} initialVisitor={null} />

      {/* Update Visitor */}
      <VisitorForm
        form={update}
        closeForm={closeUpdate}
        initialVisitor={visitorToEdit}
      />

      {/* Preview Visitor */}
    <PreviewVisitor
  preview={preview}
  closePreview={closePreview}
  visitor={visitorPreview}
/>

    </>
  );
};

export default VisitorTable;
