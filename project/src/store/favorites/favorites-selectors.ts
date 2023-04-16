import {RootState} from '../index';
import {NameSpace} from '../../settings';
import {PlaceData} from '../../types/place-data-types';
import {createSelector} from '@reduxjs/toolkit';

export const selectFavoritesCount = (state: RootState): number => state[NameSpace.Favorites].count;
export const selectFavorites = (state: RootState): PlaceData[] => state[NameSpace.Favorites].favorites;
export const selectFavoritesCities = createSelector(selectFavorites,
  (favorites) => Array.from(new Set<number>(Array.from(favorites, (element) => element.city))));
const selectCityID = (state: RootState, id: number) => id;
export const makeSelectIFavoritesByCity = () => createSelector([selectFavorites, selectCityID],
  (favorites, id) => favorites.filter((favorite) => favorite.city === id));
export const selectIsLoadingFavorites = (state: RootState) => state[NameSpace.Favorites].isFavoritesLoading;
export const selectFavoritesData = createSelector([selectFavoritesCount, selectIsLoadingFavorites],
  (count, isLoading) => ({count, isLoading}));
