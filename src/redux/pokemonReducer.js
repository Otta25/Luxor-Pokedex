import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
      setPokemon(state, action) {
        return action.payload;
      },
    },
  });

export const { setPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;