import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStats } from "./appTypes";

const initialState: IStats = {
  current_pokemon:'',
};
export const mySlice = createSlice({
  name: "mySlice",
  initialState: initialState,
  reducers: {
    setCurrentPokemon: (state, action: PayloadAction<any>) => {
      state.current_pokemon = action.payload
    }
  },
});

export const {setCurrentPokemon  } = mySlice.actions;
export default mySlice.reducer;
