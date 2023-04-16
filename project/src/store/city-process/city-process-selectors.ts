import {RootState} from '../index';
import {NameSpace} from '../../settings';
import {SortingVariants} from '../../consts/sort-consts';
import {City} from '../../types/types';
import {PlaceData} from '../../types/place-data-types';
import {createSelector} from '@reduxjs/toolkit';

export const selectCities = (state: RootState): City[] => state[NameSpace.City].cities;
export const selectCityNameByID = (state: RootState, id: number): string => state[NameSpace.City].cities[id].name;
export const selectIDByName = (state: RootState, name: string): number =>
  state[NameSpace.City].cities.findIndex((city) => city.name === name);

export const selectActiveCard = (state: RootState): number => state[NameSpace.City].activeCard;
export const selectSortingVariant = (state: RootState): SortingVariants => state[NameSpace.City].sortingVariant;
export const selectOffersCount = (state: RootState): number => state[NameSpace.City].offersCount;
export const selectCity = (state: RootState): City => state[NameSpace.City].city;
export const selectCitiesOffers = (state: RootState): PlaceData[] => state[NameSpace.City].citiesOffers;
export const selectCitiesData = createSelector([selectOffersCount, selectCity, selectCitiesOffers],
  (count, city, offers) => ({count, city, offers}));
