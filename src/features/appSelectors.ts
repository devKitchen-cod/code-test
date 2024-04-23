import { RootState } from "../store/appStore";

const getCurrentPokemon = (state: RootState) => state.app.current_pokemon;
const getAbilitiesPokemon = (state: RootState) => state.app.abilities
//Create selectors for current pokémon stats and properties
const appSelectore = {
  getCurrentPokemon,
  getAbilitiesPokemon
};

export default appSelectore;
