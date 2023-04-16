import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from '../servises/api';
import {redirect} from './middlewares/redirect';
import {RootReducer} from './root-reducer';
import {logTime} from './middlewares/logTime';
import {setTimerCommentForm} from './middlewares/set-timer-comment-form';
import {fillFavoriteData} from './middlewares/fill-favorite-data/fill-favorite-data';
import {changeFavorite} from './middlewares/fill-favorite-data/change-favorite';

export const api = createAPI();

export const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect, setTimerCommentForm, fillFavoriteData, changeFavorite),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
