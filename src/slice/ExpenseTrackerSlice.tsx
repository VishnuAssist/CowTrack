import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FarmExpenseType, paymentType } from '../models/ExpenseTrackerType';

interface ExpenseTrackerState {
  expenseList: FarmExpenseType[];
  selectedExpense: FarmExpenseType | null;
  searchTerm: string;
  paymentMethodFilter: paymentType | 'all';
  currentPage: number;
  itemsPerPage: number;
}

const initialState: ExpenseTrackerState = {
  expenseList: [
    {
      id: 1,
      amount: 500,
      date: '2025-09-20',
      place: 'Agri Store',
      category: 'feed',
      notes: 'For cow feed',
      paidBy: 'Vishnu',
      receiptNumber: 'R001',
      paymentMethod: 'cash',
      supplierName: 'Local Supplier'
    },
    {
      id: 2,
      amount: 250,
      date: '2025-09-25',
      place: 'Vet Store',
      category: 'medicine',
      notes: 'Deworming tablets',
      paidBy: 'Sriram',
      receiptNumber: 'R002',
      paymentMethod: 'upi',
      supplierName: 'Vet Supplies'
    },
  ],
  selectedExpense: null,
  searchTerm: '',
  paymentMethodFilter: 'all',
  currentPage: 1,
  itemsPerPage: 5,
};

const ExpenseTrackerSlice = createSlice({
  name: 'ExpenseTrackerSlice',
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<FarmExpenseType>) => {
      const id = Math.random() * 100;
      const expense = { ...action.payload, id };
      state.expenseList.push(expense);
    },
    removeExpense: (state, action: PayloadAction<{ id: number }>) => {
      state.expenseList = state.expenseList.filter(
        (expense) => expense.id !== action.payload.id
      );
    },
    updateExpense: (state, action: PayloadAction<FarmExpenseType>) => {
      state.expenseList = state.expenseList.map((expense) =>
        expense.id === action.payload.id ? action.payload : expense
      );
    },
    setSelectedExpense: (state, action: PayloadAction<FarmExpenseType | null>) => {
      state.selectedExpense = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      state.currentPage = 1; // Reset page when searching
    },
    setPaymentMethodFilter: (state, action: PayloadAction<paymentType | 'all'>) => {
      state.paymentMethodFilter = action.payload;
      state.currentPage = 1; // Reset page when filtering
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
      state.currentPage = 1; // Reset page when changing items per page
    },
  },
});

export const {
  addExpense,
  removeExpense,
  updateExpense,
  setSelectedExpense,
  setSearchTerm,
  setPaymentMethodFilter,
  setCurrentPage,
  setItemsPerPage
} = ExpenseTrackerSlice.actions;

export default ExpenseTrackerSlice.reducer;
export type { ExpenseTrackerState };
