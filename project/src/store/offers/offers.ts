import {RawPlace} from '../../types/place-data-types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {errMsg, NameSpace} from '../../settings';
import {adaptHosts, adaptPlace} from '../adapter';
import {User} from '../../types/types';
import {IsFavorite, OffersData} from '../../types/state-types';
import {fetchOffers, postFavorite} from '../api-actions/api-actions';
import {toast} from 'react-toastify';
import {SortingVariants} from '../../consts/sort-consts';

const initialState: OffersData = {
  offers : [],
  isOffersLoaded: false,
  hosts: [],
  isFavorites: [],
  sortingVariant: SortingVariants.Default,
};

export const offersLoadData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.hosts.push(action.payload);
    },
    setSortingVariant: (state, action:PayloadAction<number>) => {
      state.sortingVariant = action.payload;
    },
    updateFromFavorites: (state, action: PayloadAction<RawPlace[]>) => {
      const favorites = action.payload;
      state.isFavorites = state.isFavorites.map((offer) => ({
        id : offer.id,
        isFavorite: !!favorites.find((favorite) => favorite.id === offer.id)
      }));
      state.hosts = adaptHosts(state.hosts.concat(action.payload.map((raw) => raw.host)));
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.isOffersLoaded = false;
      })
      .addCase(fetchOffers.fulfilled, (state: OffersData, action: PayloadAction<RawPlace[]>) => {
        state.offers = action.payload.map((raw, index) => adaptPlace(raw, index)).filter((offer) => offer.city > -1);
        state.hosts = adaptHosts(action.payload.map((raw) => raw.host));
        state.isFavorites = action.payload.map((raw): IsFavorite => ({id: raw.id, isFavorite: raw.isFavorite}));
        state.isOffersLoaded = true;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.isOffersLoaded = true;
        toast.error(errMsg.fetchOffers);
      })
      .addCase(postFavorite.fulfilled, (state: OffersData, action: PayloadAction<RawPlace>) => {
        const offerIsFavorite = state.isFavorites.find((element) => action.payload.id === element.id);
        if (offerIsFavorite) {
          offerIsFavorite.isFavorite = action.payload.isFavorite;
        }
      });
  }
});

export const {updateFromFavorites, addUser, setSortingVariant} = offersLoadData.actions;
