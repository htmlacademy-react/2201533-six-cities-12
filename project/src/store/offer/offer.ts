import {Comment, PlaceData, RawPlace, RawPlaceData, RoomData} from '../../types/place-data-types';
import {OfferData, OfferStore} from '../../types/state-types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../settings';
import {adaptPlace, loaders} from '../adapter';
import {fetchOffer} from '../api-actions';

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
    loadOffer: (state, action: PayloadAction<RawPlace>) => {
      state.selectedOffer = adaptPlace(action.payload) ?? null;
    },
    loadNear: (state, action: PayloadAction<RawPlace[]>) => {
      state.nearOffers = action.payload.map((raw) => adaptPlace(raw));
    },
    loadComments: (state, action: PayloadAction<Comment[]>) => {
      state.comments = action.payload;
    },
    setLoadingOffer: (state, action: PayloadAction<boolean>) => {
      state.isOfferLoading = action.payload;
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
      });
  }
});

export const {loadOffer, setLoadingOffer, loadNear, loadComments} = offerData.actions;
