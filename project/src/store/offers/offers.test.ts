import {addUser, offersLoadData, setSortingVariant, updateFromFavorites} from './offers';
import {OffersData} from '../../types/state-types';
import {SortingVariants} from '../../consts/sort-consts';
import {
  getRandomSortingVariant,
  makeFakesForAddUser, makeFakesForPostFavoriteExpect,
  makeFakesForUpdateFavorites,
  makeOffersForFetchExpect
} from '../../utils/offers-mocks';
import {fetchOffers, postFavorite} from '../api-actions/api-actions';

const defaultState: OffersData = {
  offers : [],
  isOffersLoaded: false,
  hosts: [],
  isFavorites: [],
  sortingVariant: SortingVariants.Default,
};

describe('Reducer: offersLoadData', () => {
  it('without additional parameters should return initial state', () => {
    expect(offersLoadData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(defaultState);
  });
  it('should added the received value to the hosts', () => {
    const {entrance, out, payload} = makeFakesForAddUser();
    const state = Object.assign({}, defaultState);
    state.hosts = entrance;
    const result = Object.assign({}, defaultState);
    result.hosts = out;
    expect(offersLoadData.reducer(state, addUser(payload)))
      .toEqual(result);
  });
  it('should assign the received value to the sortingVariant', () => {
    const result = Object.assign({}, defaultState);
    const variant = getRandomSortingVariant();
    result.sortingVariant = variant;
    expect(offersLoadData.reducer(defaultState, setSortingVariant(variant)))
      .toEqual(result);
  });
  it('should assign the received values to the isFavorites and hosts', () => {
    const {entrance, out, hosts, payload} = makeFakesForUpdateFavorites();
    const state = Object.assign({}, defaultState);
    state.isFavorites = entrance;
    const result = Object.assign({}, defaultState);
    result.isFavorites = out;
    result.hosts = hosts;
    expect(offersLoadData.reducer(state, updateFromFavorites(payload)))
      .toEqual(result);
  });
  it('should reset isOffersLoaded', () => {
    const state = Object.assign({}, defaultState);
    state.isOffersLoaded = true;
    expect(offersLoadData.reducer(state, {type: fetchOffers.pending.type}))
      .toEqual(defaultState);
  });
  it('should assign the received values to store', () => {
    const {raw, offers ,hosts, isFavorites} = makeOffersForFetchExpect();
    const result = Object.assign({}, defaultState);
    result.isOffersLoaded = true;
    result.offers = offers;
    result.hosts = hosts;
    result.isFavorites = isFavorites;
    expect(offersLoadData.reducer(defaultState, {type: fetchOffers.fulfilled.type, payload: raw}))
      .toEqual(result);
  });
  it('should set isOffersLoaded', () => {
    const result = Object.assign({}, defaultState);
    result.isOffersLoaded = true;
    expect(offersLoadData.reducer(defaultState, {type: fetchOffers.rejected.type}))
      .toEqual(result);
  });
  it('should assign the received value to the isFavorite field', () => {
    const {entrance, out, raw} = makeFakesForPostFavoriteExpect();
    const state = Object.assign({}, defaultState);
    state.isFavorites = entrance;
    const result = Object.assign({}, defaultState);
    result.isFavorites = out;
    expect(offersLoadData.reducer(state, {type: postFavorite.fulfilled.type, payload: raw}))
      .toEqual(result);
  });
});

