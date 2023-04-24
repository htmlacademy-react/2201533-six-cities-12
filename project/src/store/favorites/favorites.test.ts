import {deleteFavoriteAction, favoriteData, incrementFavoritesCount, setFavoritesCount} from './favorites';
import {getRandomInt} from '../../utils/random';
import {getFavoritesForDeletingEqual, makeFakeFavorites, makeFavoritesForFetchExpect} from '../../utils/favorites-mocks';
import {fetchFavorites} from '../api-actions/api-actions';

describe('Reducer: favoriteData', () => {
  it('without additional parameters should return initial state', () => {
    expect(favoriteData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({count: 0, isFavoritesLoading: false, favorites: []});
  });
  it('should assign the received value to the count of favorites', () => {
    const state = {count: 0, isFavoritesLoading: false, favorites: []};
    const count = getRandomInt(0, 100);
    expect(favoriteData.reducer(state, setFavoritesCount(count)))
      .toEqual({count: count, isFavoritesLoading: false, favorites: []});
  });
  it('should increment the count of favorites by one', () => {
    const count = getRandomInt(0, 100);
    const state = {count: count, isFavoritesLoading: false, favorites: []};
    expect(favoriteData.reducer(state, incrementFavoritesCount()))
      .toEqual({count: count + 1, isFavoritesLoading: false, favorites: []});
  });
  it('should delete favorites with the received id', () => {
    const {oldFavorites, newFavorites, id, count} = getFavoritesForDeletingEqual();
    const state = {count: count, isFavoritesLoading: false, favorites: oldFavorites};
    expect(favoriteData.reducer(state, deleteFavoriteAction(id)))
      .toEqual({count: count - 1, isFavoritesLoading: false, favorites: newFavorites});
  });
  it('should not delete favorites with an invalid ID, but the count should be reduced.', () => {
    const favorites = makeFakeFavorites();
    const count = favorites.length;
    const id = count;
    const state = {count: count, isFavoritesLoading: false, favorites: favorites};
    expect(favoriteData.reducer(state, deleteFavoriteAction(id)))
      .toEqual({count: count - 1, isFavoritesLoading: false, favorites: favorites});
  });
  it('should update favorites by load favorites', () => {
    const state = {count: 0, isFavoritesLoading: false, favorites: []};
    const {raw, proc} = makeFavoritesForFetchExpect();
    expect(favoriteData.reducer(state, {type: fetchFavorites.fulfilled.type, payload: raw}))
      .toEqual({count: raw.length, isFavoritesLoading: false, favorites: proc});
  });
  it('should update isFavoritesLoading before uploading favorites', () => {
    const state = {count: 0, isFavoritesLoading: false, favorites: []};
    expect(favoriteData.reducer(state, {type: fetchFavorites.pending.type}))
      .toEqual({count: 0, isFavoritesLoading: true, favorites: []});
  });
  it('should reset isFavoritesLoading if the favorites are loaded unsuccessfully', () => {
    const state = {count: 0, isFavoritesLoading: false, favorites: []};
    expect(favoriteData.reducer(state, {type: fetchFavorites.rejected.type}))
      .toEqual({count: 0, isFavoritesLoading: false, favorites: []});
  });
});
