import {RootState} from '../index';
import {NameSpace} from '../../settings';
import {PlaceData} from '../../types/place-data-types';
//import {User} from '../../types/types';
import {IsFavorite} from '../../types/state-types';
import {createSelector} from '@reduxjs/toolkit';
import {Order, SORTING_VARIANTS} from '../../consts/sort-consts';

export const getIsOffersLoaded = (state: RootState): boolean => state[NameSpace.Offers].isOffersLoaded;
export const selectAllOffers = (state: RootState): PlaceData[] => state[NameSpace.Offers].offers;
//export const getHosts = (state: RootState): User[] => state[NameSpace.Offers].hosts;
export const selectIsFavorite = (state: RootState, id: number): boolean =>{
  const record = state[NameSpace.Offers].isFavorites.find((element: IsFavorite) => element.id === id);
  return record ? record.isFavorite : false;
};
export const selectHostByID = (state: RootState, id: number) =>
  state[NameSpace.Offers].hosts.find((element) => element.id === id) || state[NameSpace.Offers].hosts[0];
const selectCityID = (state: RootState, id: number) => id;
export const selectSortingVariant = (state: RootState) => state[NameSpace.Offers].sortingVariant;
export const makeSelectOffersByCity = () => createSelector([selectAllOffers, selectCityID],
  (offers, id) => offers.filter((offer) => offer.city === id));

export const selectSortingOffers = createSelector([makeSelectOffersByCity(), selectSortingVariant],
  (offers, variant) => {
    const field = SORTING_VARIANTS[variant].field as keyof PlaceData;
    const order = SORTING_VARIANTS[variant].order;
    offers.sort((a, b) => (a[field] > b[field] ? Order.up : Order.down) * order);
    return {offers, variant};
  });

export const selectOffersCount = createSelector(makeSelectOffersByCity(), (offers) => offers.length);
