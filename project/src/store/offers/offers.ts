import {RawPlace} from '../../types/place-data-types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../settings';
import {adaptPlace} from '../adapter';
import {User} from '../../types/types';
import {OffersData} from '../../types/state-types';
import {fetchOffers} from '../api-actions';

const initialState: OffersData = {
  offers : [],
  isOffersLoaded: false,
  hosts: [],
};

export const offersLoadData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.hosts.push(action.payload);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.isOffersLoaded = false;
      })
      .addCase(fetchOffers.fulfilled, (state: OffersData, action: PayloadAction<RawPlace[]>) => {
        state.offers = action.payload.map((raw) => adaptPlace(raw)).filter((offer) => offer.city > -1);
        const hosts: User[] = action.payload.map((raw) => raw.host);
        const hostIds = new Set(hosts.map((user) => user.id));
        state.hosts = Array.from(hostIds, (id) => hosts.find((host) => host.id === id)) as User[];
        state.isOffersLoaded = false;
      });
    // .addCase(loginAction.rejected, (state) => {
    //   state.authorizationStatus = AuthorizationStatus.NoAuth;
    // });
  }
});

export const {addUser} = offersLoadData.actions;
