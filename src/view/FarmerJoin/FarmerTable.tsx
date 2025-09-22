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
  TextField
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
import { removeFarmer ,setSearchTerm } from '../../slice/FarmerSlice';

import { AnimatePresence, motion } from "framer-motion";

const FarmerTable = () => {
  const dispatch = useDispatch();
  // const { farmerList } = useSelector((state: any) => state.farmer);

    const { farmerList, searchTerm } = useSelector((state: any) => state.farmer);

  const filteredFarmers = farmerList.filter((farmer: FarmerAddType) =>
    farmer.farmerName.toLowerCase().includes(searchTerm.toLowerCase())
  );


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
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          flexWrap={'wrap'}
          p={2}
        >
         <TextField
          label="Search"
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          size="small"
        />

          <Fab onClick={openForm} size="small" color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Box>
        <Divider />

        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: '18px' }}>name</TableCell>
              <TableCell sx={{ fontSize: '18px' }}>age</TableCell>

              <TableCell sx={{ fontSize: '18px' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <AnimatePresence>
            {filteredFarmers &&
              filteredFarmers.map((farmerDetails: FarmerAddType) => (
                // <TableRow key={farmerDetails.id}>
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

                  <TableCell>
                    <IconButton
                      size="small"
                      color="primary"
                      aria-label="VisibilityIcon"
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
                      // onClick={openDelete}
                      onClick={() => openDelete(farmerDetails)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
              </AnimatePresence>
          </TableBody>
        </Table>
      </Container>

      <Dialog
        open={alertdeleteStore}
        onClose={closeDelete}
        maxWidth="xs"
        fullWidth
      >
        <DialogContent>
          Are you sure you want to delete this store ?
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
