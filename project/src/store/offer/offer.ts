import {Comment, PlaceData, RawPlace, RawPlaceData} from '../../types/place-data-types';
import {OfferStore, PromiseStates} from '../../types/state-types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {errMsg, NameSpace} from '../../settings';
import {adaptPlace, loaders} from '../adapter';
import {fetchOffer, postComment} from '../api-actions';
import {toast} from 'react-toastify';

const initialState: OfferStore = {
  selectedOffer: null as unknown as PlaceData,
  nearOffers: [] as PlaceData[],
  comments: [] as Comment[],
  isOfferLoading: false,
  postCommentState: PromiseStates.undefined,
  timer: null as unknown as NodeJS.Timeout,
  rating: 0,
  comment: ''
};

export const offerData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    setTimer: (state, action: PayloadAction<NodeJS.Timeout>) => {
      state.timer = action.payload;
    },
    setRating: (state, action: PayloadAction<number>) => {
      state.rating = action.payload;
    },
    setReview: (state, action: PayloadAction<string>) => {
      state.comment = action.payload;
    },
    resetPostCommentState: (state) => {
      state.postCommentState = PromiseStates.undefined;
      clearTimeout(state.timer);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffer.pending, (state: OfferStore) => {
        state.isOfferLoading = true;
      })
      .addCase(fetchOffer.fulfilled, (state: OfferStore, action: PayloadAction<RawPlaceData[]>) => {
        action.payload.forEach((data: RawPlaceData, index) => {
          switch (loaders[index].field){
            case 'selectedOffer':
              state.selectedOffer = adaptPlace(data as RawPlace, 0);
              break;
            case 'nearOffers':
              state.nearOffers = (data as RawPlace[]).map((raw) => adaptPlace(raw, 0));
              break;
            case 'comments':
              state.comments = data as Comment[];
              break;
          }
        });
        state.isOfferLoading = false;
      })
      .addCase(postComment.fulfilled, (state: OfferStore, action: PayloadAction<Comment[]>) => {
        state.comments = action.payload;
        state.postCommentState = PromiseStates.fulfill;
        state.rating = 0;
        state.comment = '';
      })
      .addCase(postComment.pending, (state: OfferStore) => {
        state.postCommentState = PromiseStates.pending;
      })
      .addCase(postComment.rejected, (state: OfferStore, action ) => {
        toast.error(errMsg.postComment);
        state.postCommentState = PromiseStates.reject;
      });
  }
});

export const {resetPostCommentState, setTimer, setReview, setRating} = offerData.actions;
