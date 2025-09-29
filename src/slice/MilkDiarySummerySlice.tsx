import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MilkDiarySummaryType } from "../models/MilkDiarySummery";
import { MilkDiaryType } from "../models/MilkDairyType";

interface MilkDiarySummaryState {
  summaries: MilkDiarySummaryType[];
}

const initialState: MilkDiarySummaryState = {
  summaries: [],
};

const milkDiarySummarySlice = createSlice({
  name: "milkDiarySummary",
  initialState,
  reducers: {
    // Create a summary from a submitted diary
    addSummaryFromDiary: (state, action: PayloadAction<MilkDiaryType>) => {
      const diary = action.payload;
      const newSummary: MilkDiarySummaryType = {
        id: diary.id,
        milkCenterName: diary.milkCenterName,
        milkCenterOwner: diary.milkCenterOwner,
        milkCenterContact: diary.milkCenterContact,
        invoiceDate: new Date().toISOString(),
        totalAmount: diary.totalAmount,
        totalLitres: diary.totalLitres,
        amountWithdrawn: false,
        feedsProvided: false,
        notes: diary.notes,
      };
      state.summaries.push(newSummary);
    },

    // Update summary fields (like amountWithdrawn, feedsProvided, notes)
    updateSummary: (
      state,
      action: PayloadAction<{
        id: number;
        field: keyof MilkDiarySummaryType;
        value: any;
      }>
    ) => {
      const { id, field, value } = action.payload;
      const summary = state.summaries.find((s) => s.id === id);
      if (summary) {
        (summary as any)[field] = value;
      }
    },
  },
});

export const { addSummaryFromDiary, updateSummary } =
  milkDiarySummarySlice.actions;

export default milkDiarySummarySlice.reducer;
