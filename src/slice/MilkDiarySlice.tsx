import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MilkDiaryType, DailyMilkRecord } from "../models/MilkDairyType";

interface MilkDiaryState {
  currentDiary: MilkDiaryType | null;
  allDiaries: MilkDiaryType[];
}

const initialState: MilkDiaryState = {
  currentDiary: null,
  allDiaries: [],
};

// 🔹 Helper to recalc totals
const recalcTotals = (state: MilkDiaryState) => {
  if (!state.currentDiary) return;

  let firstLitres = 0,
    firstAmount = 0,
    secondLitres = 0,
    secondAmount = 0;

  state.currentDiary.firstHalf.forEach((e) => {
    firstLitres += e.morningLitres + e.eveningLitres;
    firstAmount += e.morningAmount + e.eveningAmount;
  });

  state.currentDiary.secondHalf.forEach((e) => {
    secondLitres += e.morningLitres + e.eveningLitres;
    secondAmount += e.morningAmount + e.eveningAmount;
  });

  state.currentDiary.firstHalfTotalLitres = firstLitres;
  state.currentDiary.firstHalfTotalAmount = firstAmount;
  state.currentDiary.secondHalfTotalLitres = secondLitres;
  state.currentDiary.secondHalfTotalAmount = secondAmount;
  state.currentDiary.totalLitres = firstLitres + secondLitres;
  state.currentDiary.totalAmount = firstAmount + secondAmount;
};

const milkDiarySlice = createSlice({
  name: "milkDiary",
  initialState,
  reducers: {
    // Start or reset a new diary
    startNewDiary: (
      state,
      action: PayloadAction<
        Omit<
          MilkDiaryType,
          | "id"
          | "totalLitres"
          | "totalAmount"
          | "firstHalfTotalLitres"
          | "firstHalfTotalAmount"
          | "secondHalfTotalLitres"
          | "secondHalfTotalAmount"
        >
      >
    ) => {
      const newDiary: MilkDiaryType = {
        id: Date.now(),
        ...action.payload,
        firstHalfTotalLitres: 0,
        firstHalfTotalAmount: 0,
        secondHalfTotalLitres: 0,
        secondHalfTotalAmount: 0,
        totalLitres: 0,
        totalAmount: 0,
      };
      state.currentDiary = newDiary;
    },

    // Update a daily entry
    updateDiaryEntry: (
      state,
      action: PayloadAction<{
        half: "firstHalf" | "secondHalf";
        dayIndex: number;
        field: keyof DailyMilkRecord;
        value: number;
      }>
    ) => {
      if (!state.currentDiary) return;

      const { half, dayIndex, field, value } = action.payload;
      const data = state.currentDiary[half];
      data[dayIndex][field] = value;

      // 🔹 Recalculate amounts for that day
      data[dayIndex].morningAmount =
        data[dayIndex].morningLitres * state.currentDiary.perLitreRate;
      data[dayIndex].eveningAmount =
        data[dayIndex].eveningLitres * state.currentDiary.perLitreRate;

      recalcTotals(state);
    },

    // Update per litre rate
    updateRate: (state, action: PayloadAction<number>) => {
      if (!state.currentDiary) return;

      state.currentDiary.perLitreRate = action.payload;

      // 🔹 Update all entries with new rate
      [...state.currentDiary.firstHalf, ...state.currentDiary.secondHalf].forEach(
        (e) => {
          e.morningAmount = e.morningLitres * action.payload;
          e.eveningAmount = e.eveningLitres * action.payload;
        }
      );

      recalcTotals(state);
    },

    // Submit the diary and push to history
    submitDiary: (state) => {
      if (state.currentDiary) {
        state.allDiaries.push(state.currentDiary);
        state.currentDiary = null;
      }
    },
  },
});

export const {
  startNewDiary,
  updateDiaryEntry,
  updateRate,
  submitDiary,
} = milkDiarySlice.actions;

export default milkDiarySlice.reducer;