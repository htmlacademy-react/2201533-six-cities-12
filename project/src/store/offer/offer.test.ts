import {offerData, resetPostCommentState, setRating, setReview, setTimer} from './offer';
import {OfferStore, PromiseStates} from '../../types/state-types';
import {PlaceData} from '../../types/place-data-types';
import {getRandomComment, getRandomRating} from '../../utils/mocks';
import {fetchOffer, postComment} from '../api-actions/api-actions';
import {makeFakeDataFromFetchOffer, makeFakeComments, FAKE_TIMER} from '../../utils/offer-mocks';

const defaultState: OfferStore = {
  selectedOffer: null as unknown as PlaceData,
  nearOffers: [],
  comments: [],
  isOfferLoading: false,
  postCommentState: PromiseStates.undefined,
  timer: null as unknown as NodeJS.Timeout,
  rating: 0,
  comment: ''
};

describe('Reducer: offerData', () => {
  it('without additional parameters should return initial state', () => {
    expect(offerData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(defaultState);
  });
  it('should assign the received value to the timer', () => {
    const result = Object.assign({}, defaultState);
    result.timer = FAKE_TIMER;
    expect(offerData.reducer(defaultState, setTimer(FAKE_TIMER)))
      .toEqual(result);
  });
  it('should assign the received value to the rating', () => {
    const rating = getRandomRating();
    const result = Object.assign({}, defaultState);
    result.rating = rating;
    expect(offerData.reducer(defaultState, setRating(rating)))
      .toEqual(result);
  });
  it('should assign the received value to the review', () => {
    const comment = getRandomComment();
    const result = Object.assign({}, defaultState);
    result.comment = comment;
    expect(offerData.reducer(defaultState, setReview(comment)))
      .toEqual(result);
  });
  it('should reset postCommentState', () => {
    const state = Object.assign({}, defaultState);
    state.postCommentState = PromiseStates.fulfill;
    expect(offerData.reducer(state, resetPostCommentState()))
      .toEqual(defaultState);
  });
  it('should set isOfferLoading before loading Offer', () => {
    const result = Object.assign({}, defaultState);
    result.isOfferLoading = true;
    expect(offerData.reducer(defaultState, {type: fetchOffer.pending.type}))
      .toEqual(result);
  });
  it('should assign values to the Offer, Near, Comments and reset isOfferLoading', () => {
    const state = Object.assign({}, defaultState);
    state.isOfferLoading = true;
    const result = Object.assign({}, defaultState);
    const {entrance, out} = makeFakeDataFromFetchOffer();
    result.selectedOffer = out.offer;
    result.nearOffers = out.near;
    result.comments = out.comments;
    result.isOfferLoading = false;
    expect(offerData.reducer(defaultState, {type: fetchOffer.fulfilled.type, payload: entrance}))
      .toEqual(result);
  });
  it('should reset isOfferLoading if Offer fails to load', () => {
    const state = Object.assign({}, defaultState);
    state.isOfferLoading = true;
    expect(offerData.reducer(state, {type: fetchOffer.rejected.type}))
      .toEqual(defaultState);
  });
  it('should assign values to comments and reset the entered data', () => {
    const state = Object.assign({}, defaultState);
    const comments = makeFakeComments();
    state.comment = getRandomComment();
    state.rating = getRandomRating();
    const result = Object.assign({}, defaultState);
    result.comments = comments;
    result.postCommentState = PromiseStates.fulfill;
    expect(offerData.reducer(state, {type: postComment.fulfilled.type, payload: comments}))
      .toEqual(result);
  });
  it('should set postCommentsState in "pending"', () => {
    const result = Object.assign({}, defaultState);
    result.postCommentState = PromiseStates.pending;
    expect(offerData.reducer(defaultState, {type: postComment.pending}))
      .toEqual(result);
  });
  it('should set postCommentsState in "reject"', () => {
    const result = Object.assign({}, defaultState);
    result.postCommentState = PromiseStates.reject;
    expect(offerData.reducer(defaultState, {type: postComment.rejected}))
      .toEqual(result);
  });
});
