import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  TablePagination,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { removeAnimalCare, setCurrentPage, setItemsPerPage } from "src/slice/AnimalCareSlice";
import { AnimalCareType } from "src/models/AnimalCareType";
import AnimalCarePreview from "./AnimalCarePreview";
import AnimalCareForm from "./AnimalCareForm";

const AnimalCareTable = () => {
  const dispatch = useDispatch();
  const { animalCareList, searchTerm, animalTypeFilter, currentPage, itemsPerPage } =
    useSelector((state: any) => state.animalCare);

    console.log("animalcare",animalCareList)
  const filteredCare = animalCareList.filter((care: AnimalCareType) => {
    const matchesSearch = care.medicineName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      animalTypeFilter === "all" || care.animalType === animalTypeFilter;
    return matchesSearch && matchesFilter;
  });

  const totalItems = filteredCare.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCare = filteredCare.slice(startIndex, startIndex + itemsPerPage);

    // this is the edit function
    const [update, setUpdate] = useState(false);
    const [datatoedit, setDataToEdit] = useState<AnimalCareType | null>(null);
    const openUpdate = (data: AnimalCareType) => {
      setDataToEdit(data);
      setUpdate(true);
    };
    const closeUpadate = () => {
      setUpdate(false);
    };
  
  // preview
  const [preview, setPreview] = useState(false);
  const [previewData, setPreviewData] = useState<AnimalCareType | null>(null);

  const openPreview = (data: AnimalCareType) => {
    setPreview(true);
    setPreviewData(data);
  };
  const closePreview = () => setPreview(false);

  // delete
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [toDelete, setToDelete] = useState<AnimalCareType | null>(null);

  const openDelete = (data: AnimalCareType) => {
    setToDelete(data);
    setDeleteDialog(true);
  };
  const confirmDelete = () => {
    if (toDelete) {
      dispatch(removeAnimalCare({ id: toDelete.id }));
      setDeleteDialog(false);
    }
  };

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Animal</TableCell>
            <TableCell>Medicine</TableCell>
            <TableCell>Reason</TableCell>
            <TableCell>Suggested By</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedCare.length > 0 ? (
            paginatedCare.map((care) => (
              <TableRow key={care.id}>
                <TableCell>{care.animalType}</TableCell>
                <TableCell>{care.medicineName}</TableCell>
                <TableCell>{care.reason}</TableCell>
                <TableCell>{care.suggestedBy}</TableCell>
                <TableCell>{care.date}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => openPreview(care)}>
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton color="warning" onClick={()=>openUpdate(care)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => openDelete(care)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} align="center">
                <Typography>No animal care records found.</Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <TablePagination
      component={"div"}
        rowsPerPageOptions={[5, 10, 25]}
        count={totalItems}
        rowsPerPage={itemsPerPage}
        page={currentPage - 1}
        onPageChange={(e, p) => dispatch(setCurrentPage(p + 1))}
        onRowsPerPageChange={(e) =>
          dispatch(setItemsPerPage(parseInt(e.target.value, 10)))
        }
      />

      <Dialog open={deleteDialog} onClose={() => setDeleteDialog(false)}>
        <DialogContent>Are you sure you want to delete this record?</DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialog(false)}>Cancel</Button>
          <Button color="error" onClick={confirmDelete}>Delete</Button>
        </DialogActions>
      </Dialog>

      <AnimalCarePreview
        preview={preview}
        closePreview={closePreview}
        PreviewDetails={previewData}
      />
      <AnimalCareForm
        form={update}
        closeForm={closeUpadate}
        initialAnimalCare={datatoedit}
      />
    </>
  );
};

export default AnimalCareTable;
