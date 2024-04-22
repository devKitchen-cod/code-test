import { RootState } from "../store/appStore";

const getCurrentPokemon = (state: RootState) => state.app.current_pokemon;

// const getEmail = (state: RootState) => state.app.email;
// const getIsAuth = (state: RootState) => state.app.isAuthenticated;
const appSelectore = {
  getCurrentPokemon,
};

export default appSelectore;
