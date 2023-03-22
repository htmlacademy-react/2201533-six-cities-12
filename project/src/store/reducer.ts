import {CITIES, DEFAULT_CITY_INDEX} from './cities';
import {SORTING_VARIANTS, SortingVariants, Order} from '../consts/sort-consts';
import {PlaceData} from '../types/types';
import {createReducer} from '@reduxjs/toolkit';
import {activateCard, changeCity, fillOffers, selectSortingVariant} from './actions';
import {OFFERS} from '../mocs/offers';
import {NO_ACTIVE_CARD} from '../consts/place-card-consts';

const initialState = {
  cities: CITIES,
  cityIndex: DEFAULT_CITY_INDEX,
  offers : [] as PlaceData[],
  citiesOffers: [] as PlaceData[],
  offersCount: 0,
  city: CITIES[DEFAULT_CITY_INDEX],
  sortingVariant: SortingVariants.Default as number,
  activeCard: NO_ACTIVE_CARD
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
    });
});
