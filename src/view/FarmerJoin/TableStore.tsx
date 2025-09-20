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
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import FormStore from "./FormStore";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../models/Setting";
import PreviewStore from "./PreviewStore";
import { removeStore } from "../../slice/FarmerSlice";
const AddStore = () => {
  const dispatch = useDispatch();
  const { storeList } = useSelector((state: any) => state.store);

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
  const [datatoedit, setDataToEdit] = useState<Store | null>(null);
  const openUpdate = (data: Store) => {
    setDataToEdit(data);
    setUpdate(true);
  };
  const closeUpadate = () => {
    setUpdate(false);
  };


  // this is the preview function
  const [preview, setPreview] = useState(false);
  const [previewdata, setPreviewData] = useState<Store | null>(null);
  const openPreview = (data: Store) => {
    setPreview(true);
    setPreviewData(data);
  };
  const closePreview = () => {
    setPreview(false);
  };

  

  // this is the delete function

  const [alertdeleteStore, setAlertDeleteStore] = useState(false);
  const [userToDelete, setUserToDelete] = useState<Store | null>(null);
  
  const deleteStore=()=>{

    if (userToDelete){
      dispatch(removeStore({ id: userToDelete.id }));
      setAlertDeleteStore(false);
      setUserToDelete(null);
    }
  }
  const openDelete = (user:Store) => {
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
          display={"flex"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          p={2}
        >
          <TextField label="Search" />

          <Fab onClick={openForm} size="small" color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Box>
        <Divider />

        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "18px" }}>Code</TableCell>
              <TableCell sx={{ fontSize: "18px" }}>Country</TableCell>
              <TableCell sx={{ fontSize: "18px" }}>Status</TableCell>
              <TableCell sx={{ fontSize: "18px" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {storeList &&
              storeList.map((storeDetails: Store) => (
                <TableRow key={storeDetails.id}>
                  <TableCell>{storeDetails.storecode}</TableCell>
                  <TableCell>{storeDetails.country}</TableCell>
                  <TableCell>
                    <Button variant="contained">{storeDetails.status}</Button>
                  </TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      color="primary"
                      aria-label="VisibilityIcon"
                      onClick={() => openPreview(storeDetails)}
                    >
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      color="primary"
                      aria-label="edit"
                      onClick={() => openUpdate(storeDetails)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      aria-label="delete"
                      // onClick={openDelete}
                      onClick={()=>openDelete(storeDetails)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        
      </Container>

      <Dialog open={alertdeleteStore} onClose={closeDelete}  maxWidth="xs" fullWidth>
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
      <FormStore form={form} closeForm={closeForm} initialStore={null} />

      <PreviewStore
        preview={preview}
        closePreview={closePreview}
        PreviewDetails={previewdata}
      />
      <FormStore
        form={update}
        closeForm={closeUpadate}
        initialStore={datatoedit}
      />
    </>
  );
};

export default AddStore;
