import {CITIES, DEFAULT_CITY_INDEX} from '../cities';
import {CityData, CityPayLoad, SortPayLoad} from '../../types/state-types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../settings';
import {Order, SORTING_VARIANTS, SortingVariants} from '../../consts/sort-consts';
import {NO_ACTIVE_CARD} from '../../consts/place-card-consts';
import {PlaceData} from '../../types/place-data-types';

const initialState: CityData = {
  cities: CITIES,
  cityIndex: DEFAULT_CITY_INDEX,
  city: CITIES[DEFAULT_CITY_INDEX],
  citiesOffers: [],
  offersCount: 0,
  sortingVariant: SortingVariants.Default,
  activeCard: NO_ACTIVE_CARD,
};

export const cityProcess = createSlice({
  name: NameSpace.City,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<CityPayLoad>) => {
      state.cityIndex = action.payload.index;
      state.citiesOffers = action.payload.offers.filter((offer) => offer.city === state.cityIndex);
      state.offersCount = state.citiesOffers.length;
      state.city = state.cities[state.cityIndex];
    },
    selectSortingVariant: (state, action:PayloadAction<SortPayLoad>) => {
      state.sortingVariant = action.payload.variant;
      const field = SORTING_VARIANTS[state.sortingVariant].field as keyof PlaceData;
      const order = SORTING_VARIANTS[state.sortingVariant].order;
      state.sortingVariant === SortingVariants.Default ?
        state.citiesOffers = action.payload.offers.filter((offer) => offer.city === state.cityIndex) :
        state.citiesOffers.sort((a, b) =>
          (a[field] > b[field] ? Order.up : Order.down) * order);
    },
    activateCard: (state, action: PayloadAction<number>) => {
      state.activeCard = action.payload;
    }
  },
});

export const {changeCity, selectSortingVariant, activateCard} = cityProcess.actions;
