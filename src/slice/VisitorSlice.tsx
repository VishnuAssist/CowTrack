import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VisitorRegistrationType } from 'src/models/VisitorRegistrationType';

interface VisitorState {
  visitorList: VisitorRegistrationType[];
  selectedVisitor: VisitorRegistrationType | null;
  searchTerm: string;
  currentPage: number;
  itemsPerPage: number;
}
const initialState: VisitorState = {
  visitorList: [
      {
      id: 1,
      name: "John Doe",
      native: "New York",
      contact: "9876543210",
      email: "john.doe@example.com",
      purpose: "Business Meeting",
      theyProvide: "Consulting Services",
      theyNeed: "Project Partnership",
      dateTime: new Date().toISOString(),
      address: "123 Main Street, NY",
      companyName: "Tech Solutions Inc.",
      notes: "First-time visitor"
    },
    {
      id: 2,
      name: "Jane Smith",
      native: "Los Angeles",
      contact: "9123456789",
      email: "jane.smith@example.com",
      purpose: "Supplier Visit",
      theyProvide: "Raw Materials",
      theyNeed: "Purchase Order",
      dateTime: new Date().toISOString(),
      address: "456 Sunset Blvd, LA",
      companyName: "Smith Supplies Co.",
      notes: "Returning visitor"
    }
  ],
  selectedVisitor: null,
  searchTerm: '',
  currentPage: 1,
  itemsPerPage: 5
};

const VisitorSlice = createSlice({
  name: 'VisitorSlice',
  initialState,
  reducers: {
    addVisitor: (state, action: PayloadAction<VisitorRegistrationType>) => {
      const id = Math.random() * 100;
      const visitor = { ...action.payload, id };
      state.visitorList.push(visitor);
    },
    removeVisitor: (state, action: PayloadAction<{ id: number }>) => {
      state.visitorList = state.visitorList.filter(
        (visitor) => visitor.id !== action.payload.id
      );
    },

    updateVisitor: (state, action: PayloadAction<VisitorRegistrationType>) => {
      state.visitorList = state.visitorList.map((visitor) =>
        visitor.id === action.payload.id ? action.payload : visitor
      );
    },
    setSearchTerm :(state,action :PayloadAction<string>) =>{
        state.searchTerm = action.payload;
        state.currentPage = 1 ;
    },

    setCurrentPage : (state,action:PayloadAction<number>)=>{
        state.currentPage = action.payload;
    },
    setItemsPerPage :(state,action :PayloadAction<number>)=>{
        state.itemsPerPage =action.payload;
        state.currentPage = 1;
    }
  }
});

export const {addVisitor,
  removeVisitor,
  updateVisitor,
  setSearchTerm,
  setCurrentPage,
  setItemsPerPage
} = VisitorSlice.actions;

export default VisitorSlice.reducer;
export type {VisitorState};