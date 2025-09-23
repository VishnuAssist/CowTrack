import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactDetailsType } from "../models/ContactDetailsType";
import { ContactDetailsStaticData } from "src/components/SliceStaticData";

interface ContactsState {
  contacts: ContactDetailsType[];
  searchQuery: string;
  roleFilter: string | null;
  currentPage: number;
  pageSize: number;
}

const initialState: ContactsState = {
  contacts: ContactDetailsStaticData,
  searchQuery: "",
  roleFilter: null,
  currentPage: 1,
  pageSize: 5,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action: PayloadAction<ContactDetailsType>) {
      state.contacts.push(action.payload);
    },
    updateContact(state, action: PayloadAction<ContactDetailsType>) {
      state.contacts = state.contacts.map((c) =>
        c.id === action.payload.id ? action.payload : c
      );
    },
    deleteContact(state, action: PayloadAction<number>) {
      state.contacts = state.contacts.filter((c) => c.id !== action.payload);
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
      state.currentPage = 1;
    },
    setRoleFilter(state, action: PayloadAction<string | null>) {
      state.roleFilter = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const {
  addContact,
  updateContact,
  deleteContact,
  setSearchQuery,
  setRoleFilter,
  setCurrentPage,
} = contactsSlice.actions;

export default contactsSlice.reducer;
