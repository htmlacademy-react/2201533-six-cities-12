import {RootState} from '../index';
import {NameSpace} from '../../settings';
import {SortingVariants} from '../../consts/sort-consts';
import {PlaceData} from '../../types/place-data-types';
import {City} from '../../types/types';

//export const getActiveCard = (state: RootState): number => state[NameSpace.City].activeCard;
export const getSortingVariant = (state: RootState): SortingVariants => state[NameSpace.City].sortingVariant;
export const getOffersCount = (state: RootState): number => state[NameSpace.City].offersCount;
export const getCitiesOffers = (state: RootState): PlaceData[] => state[NameSpace.City].citiesOffers;
//export const getCities = (state: RootState): City[] => state[NameSpace.City].cities;
export const getCity = (state: RootState): City => state[NameSpace.City].city;
