import {deleteFavoriteAction, favoriteData, incrementFavoritesCount, setFavoritesCount} from './favorites';
import {getRandomInt} from '../../random';

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
    const id = getRandomInt(0, 100);
    const state = {count: 0, isFavoritesLoading: false, favorites: [

    ]};
    expect(favoriteData.reducer(state, deleteFavoriteAction(id)))
      .toEqual({count: 0, isFavoritesLoading: false, favorites: []});
  });
});
