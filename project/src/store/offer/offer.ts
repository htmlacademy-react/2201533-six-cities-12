import {Comment, PlaceData, RawPlace, RawPlaceData} from '../../types/place-data-types';
import {OfferStore} from '../../types/state-types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../settings';
import {adaptPlace, loaders} from '../adapter';
import {fetchOffer, postComment} from '../api-actions';

const initialState: OfferStore = {
  selectedOffer: null as unknown as PlaceData,
  nearOffers: [] as PlaceData[],
  comments: [] as Comment[],
  isOfferLoading: false,
};

export const offerData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    changeFavorite: (state, action: PayloadAction<RawPlace>) => {
      if (state.selectedOffer && state.selectedOffer.id === action.payload.id) {
        state.selectedOffer.isFavorite = action.payload.isFavorite;
      }
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
              state.selectedOffer = adaptPlace(data as RawPlace);
              break;
            case 'nearOffers':
              state.nearOffers = (data as RawPlace[]).map((raw) => adaptPlace(raw));
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
      });
  }
});

export const {changeFavorite} = offerData.actions;
