import {RootState} from '../index';
import {NameSpace} from '../../settings';
import {PlaceData} from '../../types/place-data-types';
import {User} from '../../types/types';

export const getIsOffersLoaded = (state: RootState): boolean => state[NameSpace.Offers].isOffersLoaded;
export const getOffers = (state: RootState): PlaceData[] => state[NameSpace.Offers].offers;
export const getHosts = (state: RootState): User[] => state[NameSpace.Offers].hosts;


