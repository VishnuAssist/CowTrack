import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AnimalCareType, AnimalType } from '../models/AnimalCareType';

interface AnimalCareState {
  animalCareList: AnimalCareType[];
  selectedAnimalCare: AnimalCareType | null;
  searchTerm: string;
  animalTypeFilter: AnimalType | 'all';
  currentPage: number;
  itemsPerPage: number;
}

const initialState: AnimalCareState = {
  animalCareList: [
    {
      id: 1,
      animalType: 'cow',
      medicineName: 'Ivermectin',
      reason: 'Deworming',
      suggestedBy: 'Dr. Kumar',
      buyingPrice: 250,
      buyingPlace: 'AgriVet Store',
      buyingContact: '9876543210',
      notes: 'Give after food',
      date: '2025-09-20',
      medicineType: 'Injection',
    },
    {
      id: 2,
      animalType: 'goat',
      medicineName: 'Paracetamol',
      reason: 'Fever',
      suggestedBy: 'Dr. Meera',
      buyingPrice: 100,
      buyingPlace: 'Local Vet Store',
      buyingContact: '9123456780',
      notes: 'Half tablet in the morning',
      date: '2025-09-25',
      medicineType: 'Tablet',
    },
  ],
  selectedAnimalCare: null,
  searchTerm: '',
  animalTypeFilter: 'all',
  currentPage: 1,
  itemsPerPage: 5,
};

const AnimalCareSlice = createSlice({
  name: 'AnimalCareSlice',
  initialState,
  reducers: {
    addAnimalCare: (state, action: PayloadAction<AnimalCareType>) => {
      const id = Math.random() * 100;
      const animalCare = { ...action.payload, id };
      state.animalCareList.push(animalCare);
    },
    removeAnimalCare: (state, action: PayloadAction<{ id: number }>) => {
      state.animalCareList = state.animalCareList.filter(
        (animal) => animal.id !== action.payload.id
      );
    },
    updateAnimalCare: (state, action: PayloadAction<AnimalCareType>) => {
      state.animalCareList = state.animalCareList.map((animal) =>
        animal.id === action.payload.id ? action.payload : animal
      );
    },
    setSelectedAnimalCare: (
      state,
      action: PayloadAction<AnimalCareType | null>
    ) => {
      state.selectedAnimalCare = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      state.currentPage = 1;
    },
    setAnimalTypeFilter: (state, action: PayloadAction<AnimalType | 'all'>) => {
      state.animalTypeFilter = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
      state.currentPage = 1;
    },
  },
});

export const {
  addAnimalCare,
  removeAnimalCare,
  updateAnimalCare,
  setSelectedAnimalCare,
  setSearchTerm,
  setAnimalTypeFilter,
  setCurrentPage,
  setItemsPerPage,
} = AnimalCareSlice.actions;

export default AnimalCareSlice.reducer;
export type { AnimalCareState };
