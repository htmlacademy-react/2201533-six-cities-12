import {FavoritesStore} from '../../types/state-types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../settings';
import {fetchFavorites} from '../api-actions/api-actions';
import {adaptPlace} from '../adapter';

const initialState: FavoritesStore = {
  count: 0,
  isFavoritesLoading: false,
  favorites: [],
};

export const favoriteData = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {
    deleteFavoriteAction: (state, action: PayloadAction<number>) => {
      const deletedIndex = state.favorites.findIndex((favorite) => favorite.id === action.payload);
      if (deletedIndex > -1){
        state.favorites.splice(deletedIndex, 1);
      }
      state.count --;
    },
    incrementFavoritesCount: (state) => {state.count ++;},
    setFavoritesCount: (state, action: PayloadAction<number>) => {state.count = action.payload;}
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavorites.pending, (state) => {state.isFavoritesLoading = true;})
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload.map((raw) =>
          adaptPlace(raw, 0)).filter((offer) => offer.city > -1);
        state.count = state.favorites.length;
        state.isFavoritesLoading = false;
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.isFavoritesLoading = false;
      });
  }
});

export const {deleteFavoriteAction, incrementFavoritesCount, setFavoritesCount} = favoriteData.actions;
