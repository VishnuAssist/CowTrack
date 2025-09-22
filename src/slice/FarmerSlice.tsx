import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FarmerAddType, } from "../models/FarmerType";

interface FarmerState {
  farmerList: FarmerAddType[];
  selectedFarmer: FarmerAddType | null;
   searchTerm: string; 
}

const initialState: FarmerState = {
  farmerList: [
    {
        id:1,
        farmerName:"vishnu",
        age:24,
        
    },
  ],
  selectedFarmer: null,
  searchTerm:""
};

const FarmerSlice = createSlice({
  name: "FarmerSlice", 
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
    },
  },
});

export const {
  addFarmer,
  removeFarmer,
  updateFarmer,
  setSelectedFarmer,setSearchTerm
} = FarmerSlice.actions;

export default FarmerSlice.reducer;
export type { FarmerState };
