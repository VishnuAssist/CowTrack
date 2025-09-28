import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AnimalDetailsType, AnimalType } from 'src/models/AnimalDetailsType';


interface AnimalState {
  animalList: AnimalDetailsType[];
  selectedAnimal: AnimalDetailsType | null;
  searchTerm: string;
  animalTypeFilter: AnimalType | 'all';
  currentPage: number;
  itemsPerPage: number;
}

const initialState: AnimalState = {
  animalList: [
      {
    id: 1,
    animalId: "COW001",
    animalName: "Ganga",
    animalType: "cow",
    dateOfArrival: "2024-06-15T00:00:00.000Z",
    fromPlace: "Salem Dairy Farm",

    lastInjectionDate: "2025-03-10T00:00:00.000Z",
    lastInjectionBy: "Dr. Kumar",
    lastBirthDate: "2024-11-20T00:00:00.000Z",
    lastBirthGender: "female",
    lastBirthCount: 1,
    monthsToNextBirth: 8,

    breed: "Jersey",
    weight: 420,
    healthStatus: "healthy",
    vaccinationSchedule: [
      { date: "2025-06-10T00:00:00.000Z", vaccine: "FMD", by: "Dr. Kumar" },
      { date: "2025-07-15T00:00:00.000Z", vaccine: "HS" },
    ],
    feedPreference: "Green fodder & silage",
    milkProduction: 12.5,
    notes: "Calm nature, responds well to new feed."
  },
  {
    id: 2,
    animalId: "BUF001",
    animalName: "Kaveri",
    animalType: "buffalo",
    dateOfArrival: "2023-12-01T00:00:00.000Z",
    fromPlace: "Erode Village",

    lastInjectionDate: "2025-01-25T00:00:00.000Z",
    lastInjectionBy: "Dr. Anitha",
    lastBirthDate: "2024-08-05T00:00:00.000Z",
    lastBirthGender: "male",
    lastBirthCount: 2,
    monthsToNextBirth: 6,

    breed: "Murrah",
    weight: 520,
    healthStatus: "quarantine",
    vaccinationSchedule: [
      { date: "2025-04-01T00:00:00.000Z", vaccine: "B.Q.", by: "Dr. Anitha" },
      { date: "2025-09-15T00:00:00.000Z", vaccine: "Theileriosis" },
    ],
    feedPreference: "Dry fodder & grains",
    milkProduction: 9.2,
    notes: "Currently under observation due to mild fever."
  }
  ],
  selectedAnimal: null,
  searchTerm: '',
  animalTypeFilter: 'all',
  currentPage: 1,
  itemsPerPage: 5,
};

const AnimalDetailSlice = createSlice({
  name: 'AnimalDetailSlice',
  initialState,
  reducers: {
    addAnimal: (state, action: PayloadAction<AnimalDetailsType>) => {
      const id = Math.random() * 1000;
      const animal = { ...action.payload, id };
      state.animalList.push(animal);
    },
    removeAnimal: (state, action: PayloadAction<{ id: number }>) => {
      state.animalList = state.animalList.filter(
        (animal) => animal.id !== action.payload.id
      );
    },
    updateAnimal: (state, action: PayloadAction<AnimalDetailsType>) => {
      state.animalList = state.animalList.map((animal) =>
        animal.id === action.payload.id ? action.payload : animal
      );
    },
    setSelectedAnimal: (state, action: PayloadAction<AnimalDetailsType | null>) => {
      state.selectedAnimal = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      state.currentPage = 1; // Reset page when searching
    },
    setAnimalTypeFilter: (state, action: PayloadAction<AnimalType | 'all'>) => {
      state.animalTypeFilter = action.payload;
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
  addAnimal,
  removeAnimal,
  updateAnimal,
  setSelectedAnimal,
  setSearchTerm,
  setAnimalTypeFilter,
  setCurrentPage,
  setItemsPerPage,
} = AnimalDetailSlice.actions;

export default AnimalDetailSlice.reducer;
export type { AnimalState };
