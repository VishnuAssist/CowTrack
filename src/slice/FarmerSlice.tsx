import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Store } from "../models/Setting";

interface StoreState {
  storeList: Store[];
  selectedStore: Store | null;
}

const initialState: StoreState = {
  storeList: [
    {
        id:1,
        storecode:"TWG001",
        country:"Malaysia",
        status:true
    }
  ],
  selectedStore: null,
};

const StoreManagementSlice = createSlice({
  name: "StoreSlice", 
  initialState,
  reducers: {
    addStore: (state, action: PayloadAction<Store>) => {
      const id = Math.random() * 100;
      const store = { ...action.payload, id };
      state.storeList.push(store);
    },
    removeStore: (state, action: PayloadAction<{ id: number }>) => {
      state.storeList = state.storeList.filter(
        (store) => store.id !== action.payload.id
      );
    },
    updateStore: (state, action: PayloadAction<Store>) => {
      state.storeList = state.storeList.map((store) =>
        store.id === action.payload.id ? action.payload : store
      );
    },
    setSelectedStore: (state, action: PayloadAction<Store | null>) => {
      state.selectedStore = action.payload;
    },
  },
});

export const {
  addStore,
  removeStore,
  updateStore,
  setSelectedStore,
} = StoreManagementSlice.actions;

export default StoreManagementSlice.reducer;
export type { StoreState };
