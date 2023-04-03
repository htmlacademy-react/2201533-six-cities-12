import {CITIES, DEFAULT_CITY_INDEX} from './cities';
import {SORTING_VARIANTS, SortingVariants, Order} from '../consts/sort-consts';
import {createReducer} from '@reduxjs/toolkit';
import {
  activateCard,
  addUser,
  changeCity,
  fillOffers, loadComments, loadNear, loadOffer,
  loadOffers,
  selectSortingVariant,
  setLoadedOffers, setLoadingOffer
} from './actions';
import {OFFERS} from '../mocs/offers';
import {NO_ACTIVE_CARD} from '../consts/place-card-consts';
import {PlaceData, RawPlace, Comment} from '../types/place-data-types';
import {User} from '../types/types';
import {adaptPlace} from './adapter';

const initialState = {
  cities: CITIES,
  cityIndex: DEFAULT_CITY_INDEX,
  offers : [] as PlaceData[],
  citiesOffers: [] as PlaceData[],
  offersCount: 0,
  city: CITIES[DEFAULT_CITY_INDEX],
  sortingVariant: SortingVariants.Default as number,
  activeCard: NO_ACTIVE_CARD,
  hosts: [] as User[],
  isOffersLoaded: false,
  selectedOffer: null as unknown as PlaceData,
  nearOffers: [] as PlaceData[],
  comments: [] as Comment[],
  isOfferLoading: false
};


export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fillOffers, (state) => {
      state.offers = OFFERS;
    })
    .addCase(changeCity, (state, action) => {
      state.cityIndex = action.payload;
      state.citiesOffers = state.offers.filter((offer) => offer.city === state.cityIndex);
      state.offersCount = state.citiesOffers.length;
      state.city = state.cities[state.cityIndex];
    })
    .addCase(selectSortingVariant, (state, action) => {
      state.sortingVariant = action.payload;
      const field = SORTING_VARIANTS[state.sortingVariant].field as keyof PlaceData;
      const order = SORTING_VARIANTS[state.sortingVariant].order;
      state.sortingVariant === SortingVariants.Default ?
        state.citiesOffers = state.offers.filter((offer) => offer.city === state.cityIndex) :
        state.citiesOffers.sort((a, b) =>
          (a[field] > b[field] ? Order.up : Order.down) * order);
    })
    .addCase(activateCard, (state, action) => {
      state.activeCard = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload.map((raw) => adaptPlace(raw)).filter((offer) => offer.city > -1);
      const hosts: User[] = action.payload.map((raw) => raw.host);
      const hostIds = new Set(hosts.map((user) => user.id));
      state.hosts = Array.from(hostIds, (id) => hosts.find((host) => host.id === id)) as User[];
    })
    .addCase(loadOffer, (state, action) => {
      state.selectedOffer = adaptPlace(action.payload as RawPlace) ?? null;
    })
    .addCase(loadNear, (state, action) => {
      state.nearOffers = (action.payload as RawPlace[]).map((raw) => adaptPlace(raw));
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload as Comment[];
    })
    .addCase(addUser, (state, action) => {
      state.hosts.push(action.payload);
    })
    .addCase(setLoadedOffers, (state, action) => {
      state.isOffersLoaded = action.payload;
    })
    .addCase(setLoadingOffer, (state, action) => {
      state.isOfferLoading = action.payload;
    });
});
