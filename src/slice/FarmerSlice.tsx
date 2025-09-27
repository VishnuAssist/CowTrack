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
    age: 28,
    role: "Admin",
    userName: "vishnu",
    password: "vishnu@123",
    firstName: "Vishnu",
    lastName: "Kumar",
    email: "vishnu@example.com",
    dob: "1995-05-12",
    phoneNumber: "9876543210",
    village: "GreenVillage",
    taluk: "Taluk1",
    district: "DistrictA",
    pincode: 600001,
    experienceYears: 5,
    farmEquipmentOwned:"tractor"
  },
  {
    id: 2,
    age: 32,
    role: "common person",
    userName: "arun_cp",
    password: "pass456",
    firstName: "Arun",
    lastName: "Singh",
    email: "arun@example.com",
    dob: "1991-08-20",
    phoneNumber: "9123456780",
    village: "BlueVillage",
    taluk: "Taluk2",
    district: "DistrictB",
    pincode: 600002,
    experienceYears: 8,
    farmEquipmentOwned:"cross cutter"
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