import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  Divider,
  Fab,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  TablePagination,
  Typography
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import FarmerForm from './FarmerForm';
import { useDispatch, useSelector } from 'react-redux';
import { FarmerAddType } from '../../models/FarmerType';
import PreviewFarmer from './PreviewFarmer';
import { removeFarmer, setSearchTerm, setCurrentPage, setItemsPerPage } from '../../slice/FarmerSlice';

import { AnimatePresence, motion } from "framer-motion";

const FarmerTable = () => {
  const dispatch = useDispatch();
  const { farmerList, searchTerm, roleFilter, currentPage, itemsPerPage } = useSelector((state: any) => state.farmer);

  // Filter farmers based on search term and role filter
  const filteredFarmers = farmerList.filter((farmer: FarmerAddType) => {
    const matchesSearch = farmer.farmerName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'all' || farmer.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  // Pagination calculations
  const totalItems = filteredFarmers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedFarmers = filteredFarmers.slice(startIndex, startIndex + itemsPerPage);

  const handleChangePage = (event: unknown, newPage: number) => {
    dispatch(setCurrentPage(newPage + 1)); // Material-UI uses 0-based index, we use 1-based
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setItemsPerPage(parseInt(event.target.value, 10)));
  };

  // this is the form to input the value of user
  const [form, setForm] = useState(false);
  const openForm = () => {
    setForm(true);
  };
  const closeForm = () => {
    setForm(false);
  };

  // this is the edit function
  const [update, setUpdate] = useState(false);
  const [datatoedit, setDataToEdit] = useState<FarmerAddType | null>(null);
  const openUpdate = (data: FarmerAddType) => {
    setDataToEdit(data);
    setUpdate(true);
  };
  const closeUpadate = () => {
    setUpdate(false);
  };

  // this is the preview function
  const [preview, setPreview] = useState(false);
  const [previewdata, setPreviewData] = useState<FarmerAddType | null>(null);
  const openPreview = (data: FarmerAddType) => {
    setPreview(true);
    setPreviewData(data);
  };
  const closePreview = () => {
    setPreview(false);
  };

  // this is the delete function
  const [alertdeleteStore, setAlertDeleteStore] = useState(false);
  const [userToDelete, setUserToDelete] = useState<FarmerAddType | null>(null);

  const deleteStore = () => {
    if (userToDelete) {
      dispatch(removeFarmer({ id: userToDelete.id }));
      setAlertDeleteStore(false);
      setUserToDelete(null);
    }
  };
  const openDelete = (user: FarmerAddType) => {
    setAlertDeleteStore(true);
    setUserToDelete(user);
  };
  const closeDelete = () => {
    setAlertDeleteStore(false);
    setUserToDelete(null);
  };

  return (
    <>
      <Container maxWidth="lg">
        {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">
            Showing {paginatedFarmers.length} of {totalItems} farmers
          </Typography>
        </Box> */}

        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: '18px' }}>Name</TableCell>
              <TableCell sx={{ fontSize: '18px' }}>Age</TableCell>
              <TableCell sx={{ fontSize: '18px' }}>Role</TableCell>
              <TableCell sx={{ fontSize: '18px' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <AnimatePresence>
              {paginatedFarmers.length > 0 ? (
                paginatedFarmers.map((farmerDetails: FarmerAddType) => (
                  <TableRow
                    key={farmerDetails.id}
                    component={motion.tr}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TableCell>{farmerDetails.farmerName}</TableCell>
                    <TableCell>{farmerDetails.age}</TableCell>
                    <TableCell>{farmerDetails.role}</TableCell>
                    <TableCell>
                      <IconButton
                        size="small"
                        color="primary"
                        aria-label="View"
                        onClick={() => openPreview(farmerDetails)}
                      >
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton
                        size="small"
                        color="primary"
                        aria-label="edit"
                        onClick={() => openUpdate(farmerDetails)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        aria-label="delete"
                        onClick={() => openDelete(farmerDetails)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} align="center" sx={{ py: 3 }}>
                    <Typography variant="body1" color="textSecondary">
                      No farmers found matching your criteria.
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
          page={currentPage - 1} // Convert to 0-based for Material-UI
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Container>

      <Dialog
        open={alertdeleteStore}
        onClose={closeDelete}
        maxWidth="xs"
        fullWidth
      >
        <DialogContent>
          Are you sure you want to delete this farmer?
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={closeDelete}>
            Cancel
          </Button>
          <Button color="error" onClick={deleteStore}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      
      <FarmerForm form={form} closeForm={closeForm} initialFarmer={null} />
      <PreviewFarmer
        preview={preview}
        closePreview={closePreview}
        PreviewDetails={previewdata}
      />
      <FarmerForm
        form={update}
        closeForm={closeUpadate}
        initialFarmer={datatoedit}
      />
    </>
  );
};

export default FarmerTable;