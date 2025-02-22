import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavouritesState {
  favouriteIds: number[];
}

const initialState: FavouritesState = {
  favouriteIds: [],
};

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    toggleFavourite: (state, action: PayloadAction<number>) => {
      const index = state.favouriteIds.indexOf(action.payload);
      if (index === -1) {
        state.favouriteIds.push(action.payload);
      } else {
        state.favouriteIds.splice(index, 1);
      }
    },
  },
});

export const { toggleFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
