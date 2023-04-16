import {NameSpace} from '../settings';
import {cityProcess} from './city-process/city-process';
import {offersLoadData} from './offers/offers';
import {offerData} from './offer/offer';
import {userProcess} from './user-process/user-process';
import {combineReducers} from '@reduxjs/toolkit';
import {favoriteData} from './favorites/favorites';

export const RootReducer = combineReducers({
  [NameSpace.City]: cityProcess.reducer,
  [NameSpace.Offers]: offersLoadData.reducer,
  [NameSpace.Offer]: offerData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Favorites]: favoriteData.reducer
});

export type Reducer = ReturnType<typeof RootReducer>;
