import { Table, TableBody, TableCell, TableHead, TableRow, IconButton, TablePagination, Dialog, DialogContent, DialogActions, Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAnimal, setCurrentPage, setItemsPerPage } from "../../slice/AnimalDetailsSlice";
import AnimalDetailForm from "./AnimalDetailForm";
import AnimalDetailPreview from "./AnimalDetailPreview";
import { AnimatePresence, motion } from "framer-motion";

const AnimalDetailTable = () => {
  const dispatch = useDispatch();
  const { animalList, searchTerm, animalTypeFilter, currentPage, itemsPerPage } = useSelector((state: any) => state.animal);

  const filteredAnimals = animalList.filter((animal: any) => {
    const matchesSearch = animal.animalName.toLowerCase().includes(searchTerm?.toLowerCase() || "");
    const matchesType = animalTypeFilter === "all" || animal.animalType === animalTypeFilter;
    return matchesSearch && matchesType;
  });

  const totalItems = filteredAnimals.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedAnimals = filteredAnimals.slice(startIndex, startIndex + itemsPerPage);

  const handleChangePage = (_: any, newPage: number) => dispatch(setCurrentPage(newPage + 1));
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => dispatch(setItemsPerPage(parseInt(event.target.value,10)));

  const [form, setForm] = useState(false);
  const [updateData, setUpdateData] = useState<any>(null);
  const [preview, setPreview] = useState(false);
  const [previewData, setPreviewData] = useState<any>(null);
  const [alertDelete, setAlertDelete] = useState(false);
  const [animalToDelete, setAnimalToDelete] = useState<any>(null);

  const openUpdate = (data: any) => { setUpdateData(data); setForm(true); };
  const openPreview = (data: any) => { setPreviewData(data); setPreview(true); };
  const openDelete = (data: any) => { setAnimalToDelete(data); setAlertDelete(true); };
  const deleteAnimal = () => { if(animalToDelete){ dispatch(removeAnimal({id:animalToDelete.id})); setAlertDelete(false); } };

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Weight</TableCell>
            <TableCell>Health</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <AnimatePresence>
            {paginatedAnimals.length > 0 ? (
              paginatedAnimals.map((animal: any) => (
                <TableRow key={animal.id} component={motion.tr} layout initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}}>
                  <TableCell>{animal.animalName}</TableCell>
                  <TableCell>{animal.animalId}</TableCell>
                  <TableCell>{animal.animalType}</TableCell>
                  <TableCell>{animal.weight || "-"}</TableCell>
                  <TableCell>{animal.healthStatus || "-"}</TableCell>
                  <TableCell>
                    <IconButton onClick={()=>openPreview(animal)} color="primary"><VisibilityIcon/></IconButton>
                    <IconButton onClick={()=>openUpdate(animal)} color="warning"><EditIcon/></IconButton>
                    <IconButton onClick={()=>openDelete(animal)} color="error"><DeleteIcon/></IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow><TableCell colSpan={6} align="center">No Animals Found</TableCell></TableRow>
            )}
          </AnimatePresence>
        </TableBody>
      </Table>

      <TablePagination rowsPerPageOptions={[5,10,25]} component="div" count={totalItems} rowsPerPage={itemsPerPage} page={currentPage-1} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />

      <Dialog open={alertDelete} onClose={()=>setAlertDelete(false)}>
        <DialogContent>Are you sure you want to delete this animal?</DialogContent>
        <DialogActions>
          <Button onClick={()=>setAlertDelete(false)}>Cancel</Button>
          <Button color="error" onClick={deleteAnimal}>Confirm</Button>
        </DialogActions>
      </Dialog>

      <AnimalDetailForm form={form} closeForm={()=>setForm(false)} initialAnimal={updateData} />
      <AnimalDetailPreview preview={preview} closePreview={()=>setPreview(false)} PreviewDetails={previewData} />
    </>
  );
};

export default AnimalDetailTable;
