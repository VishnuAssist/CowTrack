import { Table, TableBody, TableCell, TableHead, TableRow, TablePagination, IconButton, Dialog, DialogActions, DialogContent, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeExpense, setCurrentPage, setItemsPerPage } from '../../slice/ExpenseTrackerSlice';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpenseForm from './ExpenseForm';
import ExpensePreview from './ExpensePreview';

const ExpenseTable = () => {
  const dispatch = useDispatch();
  const { expenseList, searchTerm, paymentMethodFilter, currentPage, itemsPerPage } = useSelector((state: any) => state.expenseTracker);

  const filteredExpenses = expenseList.filter((e: any) => {
    const matchesSearch = e.place.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPayment = paymentMethodFilter === 'all' || e.paymentMethod === paymentMethodFilter;
    return matchesSearch && matchesPayment;
  });

  const totalItems = filteredExpenses.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedExpenses = filteredExpenses.slice(startIndex, startIndex + itemsPerPage);

  const [formOpen, setFormOpen] = useState(false);
  const [expenseToEdit, setExpenseToEdit] = useState<any>(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewData, setPreviewData] = useState<any>(null);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [expenseToDelete, setExpenseToDelete] = useState<any>(null);

  const handleChangePage = (event: unknown, newPage: number) => dispatch(setCurrentPage(newPage + 1));
  const handleChangeRowsPerPage = (event: any) => dispatch(setItemsPerPage(parseInt(event.target.value)));

  const openEdit = (expense: any) => { setExpenseToEdit(expense); setFormOpen(true); };
  const openPreviewHandler = (expense: any) => { setPreviewData(expense); setPreviewOpen(true); };
  const openDelete = (expense: any) => { setExpenseToDelete(expense); setDeleteOpen(true); };
  const handleDelete = () => { if (expenseToDelete) dispatch(removeExpense({id: expenseToDelete.id})); setDeleteOpen(false); };

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Place</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Payment</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedExpenses.length > 0 ? paginatedExpenses.map((exp: any) => (
            <TableRow key={exp.id}>
              <TableCell>{exp.place}</TableCell>
              <TableCell>{exp.amount}</TableCell>
              <TableCell>{exp.category}</TableCell>
              <TableCell>{exp.paymentMethod}</TableCell>
              <TableCell>
                <IconButton onClick={() => openPreviewHandler(exp)}><VisibilityIcon /></IconButton>
                <IconButton onClick={() => openEdit(exp)}><EditIcon /></IconButton>
                <IconButton onClick={() => openDelete(exp)}><DeleteIcon /></IconButton>
              </TableCell>
            </TableRow>
          )) : <TableRow><TableCell colSpan={5} align="center"><Typography>No expenses found</Typography></TableCell></TableRow>}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={totalItems}
        page={currentPage - 1}
        rowsPerPage={itemsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      <ExpenseForm form={formOpen} closeForm={() => setFormOpen(false)} initialExpense={expenseToEdit} />
      <ExpensePreview preview={previewOpen} closePreview={() => setPreviewOpen(false)} PreviewDetails={previewData} />

      <Dialog open={deleteOpen} onClose={() => setDeleteOpen(false)}>
        <DialogContent>Are you sure you want to delete this expense?</DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteOpen(false)}>Cancel</Button>
          <Button color="error" onClick={handleDelete}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ExpenseTable;
