import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FarmerAddType } from '../models/FarmerType';

interface FarmerState {
  farmerList: FarmerAddType[];
  selectedFarmer: FarmerAddType | null;
  searchTerm: string;
  roleFilter: string;
  currentPage: number;
  itemsPerPage: number;
}

const initialState: FarmerState = {
  farmerList: [
    {
      id: 1,
      farmerName: 'vishnu',
      age: 24,
      role: 'farmer'
    },
    {
      id: 2,
      farmerName: "Arun",
      age: 30,
      role: "common person",
    },
    {
      id: 3,
      farmerName: "Priya",
      age: 27,
      role: "farmer",
    },
    {
      id: 4,
      farmerName: "Suresh",
      age: 35,
      role: "common person",
    },
    {
      id: 5,
      farmerName: "Meena",
      age: 22,
      role: "farmer",
    },
    {
      id: 6,
      farmerName: "Rahul",
      age: 28,
      role: "common person",
    },
  ],
  selectedFarmer: null,
  searchTerm: '',
  roleFilter: 'all',
  currentPage: 1,
  itemsPerPage: 5
};

const FarmerSlice = createSlice({
  name: 'FarmerSlice',
  initialState,
  reducers: {
    addFarmer: (state, action: PayloadAction<FarmerAddType>) => {
      const id = Math.random() * 100;
      const farmer = { ...action.payload, id };
      state.farmerList.push(farmer);
    },
    removeFarmer: (state, action: PayloadAction<{ id: number }>) => {
      state.farmerList = state.farmerList.filter(
        (farmer) => farmer.id !== action.payload.id
      );
    },
    updateFarmer: (state, action: PayloadAction<FarmerAddType>) => {
      state.farmerList = state.farmerList.map((farmer) =>
        farmer.id === action.payload.id ? action.payload : farmer
      );
    },
    setSelectedFarmer: (state, action: PayloadAction<FarmerAddType | null>) => {
      state.selectedFarmer = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      state.currentPage = 1; // Reset to first page when searching
    },
    setRoleFilter: (state, action: PayloadAction<string>) => {
      state.roleFilter = action.payload;
      state.currentPage = 1; // Reset to first page when filtering
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
      state.currentPage = 1; // Reset to first page when changing items per page
    }
  }
});

export const {
  addFarmer,
  removeFarmer,
  updateFarmer,
  setSelectedFarmer,
  setSearchTerm,
  setRoleFilter,
  setCurrentPage,
  setItemsPerPage
} = FarmerSlice.actions;

export default FarmerSlice.reducer;
export type { FarmerState };