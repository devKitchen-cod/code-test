import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStats } from "./appTypes";

const initialState: IStats = {
  current_pokemon: "",
  abilities:'',
};
export const mySlice = createSlice({
  name: "mySlice",
  initialState: initialState,
  reducers: {
    setStatsForCurrentPokemon: (state, action: PayloadAction<any>) => {
      state.current_pokemon = action.payload;
    },
    setAbilitiesForCurrentPokemon: (state, action: PayloadAction<any>) => {
      state.abilities = action.payload;
    },
  },
});

export const { setStatsForCurrentPokemon, setAbilitiesForCurrentPokemon } = mySlice.actions;
export default mySlice.reducer;
