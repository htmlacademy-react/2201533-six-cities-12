import {Middleware, PayloadAction} from '@reduxjs/toolkit';
import {Reducer} from '../../root-reducer';
import {TypeAction} from '../../typeAction';
import {PromiseStates} from '../../../types/state-types';
import {RawPlace} from '../../../types/place-data-types';
import {updateFromFavorites} from '../../offers/offers';
import {setFavoritesCount} from '../../favorites/favorites';

export const fillFavoriteData: Middleware<unknown, Reducer> =
  ({dispatch}) =>
    (next) =>
      (action: PayloadAction<RawPlace[]>) => {
        switch (action.type) {
          case `${TypeAction.fetchFavorites}/${PromiseStates.fulfill}`: {
            dispatch(updateFromFavorites(action.payload));
            break;
          }
          case `${TypeAction.fetchOffers}/${PromiseStates.fulfill}`: {
            dispatch(setFavoritesCount(action.payload.reduce((accumulator: number, offer) =>
              offer.isFavorite ? accumulator + 1 : accumulator, 0)));
          }
        }
        if (action.type === `${TypeAction.fetchFavorites}/${PromiseStates.fulfill}`) {
          dispatch(updateFromFavorites(action.payload));
        }
        return next(action);
      };
