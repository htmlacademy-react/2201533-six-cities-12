import {CITIES, DEFAULT_CITY_INDEX} from '../cities';
import {CityData} from '../../types/state-types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../settings';

const initialState: CityData = {
  cities: CITIES,
  cityIndex: DEFAULT_CITY_INDEX,
};

export const cityProcess = createSlice({
  name: NameSpace.City,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<number>) => {
      state.cityIndex = action.payload;
    },
  },
});

export const {changeCity} = cityProcess.actions;
