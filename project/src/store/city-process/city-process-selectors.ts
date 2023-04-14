import {RootState} from '../index';
import {NameSpace} from '../../settings';
import {SortingVariants} from '../../consts/sort-consts';
import {CitiesData} from '../../types/state-types';
import {City} from '../../types/types';
import {PlaceData} from '../../types/place-data-types';

export const getActiveCard = (state: RootState): number => state[NameSpace.City].activeCard;
export const getSortingVariant = (state: RootState): SortingVariants => state[NameSpace.City].sortingVariant;
export const getOffersCount = (state: RootState): number => state[NameSpace.City].offersCount;
export const getCity = (state: RootState): City => state[NameSpace.City].city;
export const getCitiesOffers = (state: RootState): PlaceData[] => state[NameSpace.City].citiesOffers;
export const getCitiesData = (state: RootState): CitiesData => ({
  count: state[NameSpace.City].offersCount,
  offers: state[NameSpace.City].citiesOffers,
  city: state[NameSpace.City].city
});
