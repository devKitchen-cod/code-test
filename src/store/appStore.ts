import  mySlice  from "@/features/appSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  app: mySlice,
});
export const store = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: true,
  });
};
export default store;
// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];