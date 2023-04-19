import {RootState} from '../index';
import {NameSpace} from '../../settings';
import {City} from '../../types/types';
import {createSelector} from '@reduxjs/toolkit';

export const selectCities = (state: RootState): City[] => state[NameSpace.City].cities;
export const selectCityNameByID = (state: RootState, id: number): string => state[NameSpace.City].cities[id].name;
export const selectIDByName = (state: RootState, name: string): number =>
  state[NameSpace.City].cities.findIndex((city) => city.name === name);
export const selectCityIndex = (state: RootState) => state[NameSpace.City].cityIndex;

export const selectActiveCard = (state: RootState): number => state[NameSpace.City].activeCard;
export const selectCity = (state: RootState) => state[NameSpace.City].cities[state[NameSpace.City].cityIndex];
export const selectCityWithIndex = createSelector([selectCityIndex, selectCity],
  (index, city) => ({city, index}));
