import {RootState} from '../index';
import {NameSpace} from '../../settings';
import {PlaceData} from '../../types/place-data-types';
import {Comment} from '../../types/place-data-types';
import {RoomData} from '../../types/state-types';

export const getIsOfferLoading = (state: RootState): boolean => state[NameSpace.Offer].isOfferLoading;
export const getSelectedOffer = (state: RootState): PlaceData => state[NameSpace.Offer].selectedOffer;
export const getComments = (state: RootState): Comment[] => state[NameSpace.Offer].comments;
export const getCommentsCount = (state: RootState): number => state[NameSpace.Offer].comments.length;
export const getRoomData = (state: RootState): RoomData => ({
  isLoading: state[NameSpace.Offer].isOfferLoading,
  offer: state[NameSpace.Offer].selectedOffer,
  near: state[NameSpace.Offer].nearOffers
});
