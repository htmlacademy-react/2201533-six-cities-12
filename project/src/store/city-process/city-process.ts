import {CITIES, DEFAULT_CITY_INDEX} from '../cities';
import {CityData} from '../../types/state-types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../settings';
import {NO_ACTIVE_CARD} from '../../consts/place-card-consts';

const initialState: CityData = {
  cities: CITIES,
  cityIndex: DEFAULT_CITY_INDEX,
  activeCard: NO_ACTIVE_CARD,
};

export const cityProcess = createSlice({
  name: NameSpace.City,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<number>) => {
      state.cityIndex = action.payload;
    },
    activateCard: (state, action: PayloadAction<number>) => {
      state.activeCard = action.payload;
    }
  },
});

export const {changeCity, activateCard} = cityProcess.actions;
