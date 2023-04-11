import {RootState} from '../index';
import {NameSpace} from '../../settings';
import {PlaceData} from '../../types/place-data-types';
import {Comment} from '../../types/place-data-types';

export const getIsOfferLoading = (state: RootState): boolean => state[NameSpace.Offer].isOfferLoading;
export const getSelectedOffer = (state: RootState): PlaceData => state[NameSpace.Offer].selectedOffer;
export const getNearOffers = (state: RootState): PlaceData[] => state[NameSpace.Offer].nearOffers;
export const getComments = (state: RootState): Comment[] => state[NameSpace.Offer].comments;
