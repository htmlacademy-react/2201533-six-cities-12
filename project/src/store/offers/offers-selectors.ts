import {RootState} from '../index';
import {NameSpace} from '../../settings';
import {PlaceData} from '../../types/place-data-types';
import {User} from '../../types/types';
import {IsFavorite} from '../../types/state-types';

export const getIsOffersLoaded = (state: RootState): boolean => state[NameSpace.Offers].isOffersLoaded;
export const getOffers = (state: RootState): PlaceData[] => state[NameSpace.Offers].offers;
export const getHosts = (state: RootState): User[] => state[NameSpace.Offers].hosts;
export const selectIsFavorite = (state: RootState, id: number): boolean =>{
  const record = state[NameSpace.Offers].isFavorites.find((element: IsFavorite) => element.id === id);
  return record ? record.isFavorite : false;
};
export const selectHostByID = (state: RootState, id: number) =>
  state[NameSpace.Offers].hosts.find((element) => element.id === id) || state[NameSpace.Offers].hosts[0];
