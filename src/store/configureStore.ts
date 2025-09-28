import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import loginReducer from "../slice/loginSlice";
import farmerReducer from "../slice/FarmerSlice";
import contactReducer from "../slice/ContactDeatilsSlice";
import visitorReducer from "../slice/VisitorSlice";
import animalReducer from "../slice/AnimalCareSlice";
import expenseTrackerReducer from "../slice/ExpenseTrackerSlice";
import animalDetailReducer from "../slice/AnimalDetailsSlice";
import milkDiaryReducer from "../slice/MilkDiarySlice";

const rootReducer = combineReducers({
  login: loginReducer,
  farmer: farmerReducer,
  contacts:contactReducer,
  visitor :visitorReducer,
  animalCare:animalReducer,
  expenseTracker:expenseTrackerReducer,
  animal:animalDetailReducer,
      milkDiary: milkDiaryReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default rootReducer;
