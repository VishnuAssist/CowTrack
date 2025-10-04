import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid
} from '@mui/material';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addExpense, updateExpense } from '../../slice/ExpenseTrackerSlice';
import { FarmExpenseType } from '../../models/ExpenseTrackerType';
import CustomInput from '../../components/FormComponents/CustomInput';
import CustomSelect from '../../components/FormComponents/CustomSelect';

interface Props {
  form: boolean;
  closeForm: () => void;
  initialExpense: FarmExpenseType | null;
}

const ExpenseForm: FC<Props> = ({ form, closeForm, initialExpense }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm<FarmExpenseType>({
    values: initialExpense || {} as FarmExpenseType
  });

  const submitData = (data: FarmExpenseType) => {
    if (initialExpense) dispatch(updateExpense(data));
    else dispatch(addExpense(data));
    reset();
    closeForm();
  };

  useEffect(() => {
    reset(initialExpense || {});
  }, [initialExpense, reset]);

  return (
    <Dialog open={form} onClose={closeForm} maxWidth="md" fullWidth>
      <DialogTitle>{initialExpense ? 'Update Expense' : 'Add Expense'}</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(submitData)}>
          <Grid container spacing={2}>
            <Grid size={{xs:12,md:4}}>
              <CustomInput
                label="Amount"
                name="amount"
                type="number"
                register={register}
                required
              />
            </Grid>
            <Grid size={{xs:12,md:4}}>
              <CustomInput
                label="Date"
                name="date"
                type="date"
                register={register}
                required
              />
            </Grid>
            <Grid size={{xs:12,md:4}}>
              <CustomInput
                label="Place"
                name="place"
                register={register}
                required
              />
            </Grid>
            <Grid size={{xs:12,md:4}}>
              <CustomSelect
                label="Category"
                name="category"
                options={[
                  { value: 'feed', label: 'Feed' },
                  { value: 'medicine', label: 'Medicine' },
                  { value: 'rope', label: 'Rope' },
                  { value: 'equipment', label: 'Equipment' },
                  { value: 'misc', label: 'Misc' }
                ]}
                register={register}
                defaultValue={initialExpense?.category || 'feed'}
                required
              />
            </Grid>
            <Grid size={{xs:12,md:4}}>
              <CustomSelect
                label="Payment Method"
                name="paymentMethod"
                options={[
                  { value: 'cash', label: 'Cash' },
                  { value: 'card', label: 'Card' },
                  { value: 'upi', label: 'UPI' },
                  { value: 'other', label: 'Other' }
                ]}
                register={register}
                defaultValue={initialExpense?.paymentMethod || 'cash'}
                required
              />
            </Grid>
            <Grid size={{xs:12,md:4}}>
              <CustomInput
                label="Paid By"
                name="paidBy"
                register={register}
              />
            </Grid>
            <Grid size={{xs:12,md:4}}>
              <CustomInput
                label="Supplier Name"
                name="supplierName"
                register={register}
              />
            </Grid>
            <Grid size={{xs:12,md:4}}>
              <CustomInput
                label="Receipt Number"
                name="receiptNumber"
                register={register}
              />
            </Grid>
            <Grid size={{xs:12,md:12}}>
              <CustomInput
                label="Notes"
                name="notes"
                register={register}
              />
            </Grid>
          </Grid>

          <DialogActions>
            <Button type="submit" variant="contained" color="primary">
              {initialExpense ? 'Update' : 'Save'}
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ExpenseForm;
