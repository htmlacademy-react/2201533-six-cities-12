import {RootState} from '../index';
import {MAX_COMMENTS, NameSpace, ReviewLength} from '../../settings';
import {Comment, PlaceData} from '../../types/place-data-types';
import {PromiseStates, RoomData} from '../../types/state-types';
import {createSelector} from '@reduxjs/toolkit';

export const selectIsOfferLoading = (state: RootState): boolean => state[NameSpace.Offer].isOfferLoading;
export const selectSelectedOffer = (state: RootState): PlaceData => state[NameSpace.Offer].selectedOffer;
export const selectNearOffers = (state: RootState): PlaceData[] => state[NameSpace.Offer].nearOffers;
export const getComments = (state: RootState): Comment[] => state[NameSpace.Offer].comments;
export const getCommentsCount = (state: RootState): number => state[NameSpace.Offer].comments.length;
export const selectRoomData = createSelector([selectIsOfferLoading, selectSelectedOffer, selectNearOffers],
  (isLoading, offer, near): RoomData => ({isLoading, offer, near})
);
export const selectPostCommentsState = (state: RootState): PromiseStates => state[NameSpace.Offer].postCommentState;
export const selectBlockReviewForm = (state: RootState): boolean =>
  state[NameSpace.Offer].postCommentState === PromiseStates.pending;

export const selectRating = (state: RootState): number => state[NameSpace.Offer].rating;
export const selectReview = (state: RootState): string => state[NameSpace.Offer].comment;

export const selectReviewStars = createSelector([selectBlockReviewForm, selectRating],
  (isBlock, rating) => ({isBlock, rating}));
export const selectReviewsText = createSelector([selectBlockReviewForm, selectReview],
  (isBlock, text) => ({isBlock, text}));
export const selectPostCommentFulfill = createSelector(selectPostCommentsState,
  (state) => state === PromiseStates.fulfill);

export const selectCommentsData = createSelector([getComments, getCommentsCount],
  (comments, count) => ({
    reviews: comments.slice().sort((a, b) => a.date < b.date ? 1 : -1).slice(0, MAX_COMMENTS),
    count
  }));
export const selectFailed = createSelector(selectPostCommentsState, (state) => ({
  isFailed: state === PromiseStates.reject,
  isReset: state === PromiseStates.undefined
}));
export const selectDisabledSubmit = createSelector([selectBlockReviewForm, selectReview, selectRating],
  (isBlock, text, stars): boolean => !(!isBlock && stars > 0 && text.length > ReviewLength.Min));
