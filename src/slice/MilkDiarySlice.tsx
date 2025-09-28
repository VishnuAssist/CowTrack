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

const milkDiarySlice = createSlice({
  name: "milkDiary",
  initialState,
  reducers: {
    startNewDiary: (state, action: PayloadAction<Omit<MilkDiaryType, "id" | "totalLitres" | "totalAmount">>) => {
      const newDiary: MilkDiaryType = {
        id: Date.now(),
        ...action.payload,
        totalLitres: 0,
        totalAmount: 0,
      };
      state.currentDiary = newDiary;
    },
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

      // recalc amounts
      data[dayIndex].morningAmount =
        data[dayIndex].morningLitres * state.currentDiary.perLitreRate;
      data[dayIndex].eveningAmount =
        data[dayIndex].eveningLitres * state.currentDiary.perLitreRate;

      // recalc totals
      let litres = 0,
        amount = 0;
      [...state.currentDiary.firstHalf, ...state.currentDiary.secondHalf].forEach(
        (e) => {
          litres += e.morningLitres + e.eveningLitres;
          amount += e.morningAmount + e.eveningAmount;
        }
      );
      state.currentDiary.totalLitres = litres;
      state.currentDiary.totalAmount = amount;
    },
    updateRate: (state, action: PayloadAction<number>) => {
      if (!state.currentDiary) return;
      state.currentDiary.perLitreRate = action.payload;

      // recalc all
      let litres = 0,
        amount = 0;
      [...state.currentDiary.firstHalf, ...state.currentDiary.secondHalf].forEach(
        (e) => {
          e.morningAmount = e.morningLitres * action.payload;
          e.eveningAmount = e.eveningLitres * action.payload;
          litres += e.morningLitres + e.eveningLitres;
          amount += e.morningAmount + e.eveningAmount;
        }
      );
      state.currentDiary.totalLitres = litres;
      state.currentDiary.totalAmount = amount;
    },
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
