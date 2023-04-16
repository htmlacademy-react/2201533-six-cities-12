import {Middleware, PayloadAction} from '@reduxjs/toolkit';
import {Reducer} from '../../root-reducer';
import {RawPlace} from '../../../types/place-data-types';
import {TypeAction} from '../../typeAction';
import {PromiseStates} from '../../../types/state-types';
import {deleteFavoriteAction, incrementFavoritesCount} from '../../favorites/favorites';

export const changeFavorite: Middleware<unknown, Reducer> =
  ({dispatch}) =>
    (next) =>
      (action: PayloadAction<RawPlace>) => {
        if (action.type === `${TypeAction.postFavorite}/${PromiseStates.fulfill}`) {
          const offer = action.payload;
          offer.isFavorite ? dispatch(incrementFavoritesCount()) : dispatch(deleteFavoriteAction(offer.id));
        }
        return next(action);
      };
