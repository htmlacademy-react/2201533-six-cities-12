import {Middleware, PayloadAction} from '@reduxjs/toolkit';
import {TypeAction} from '../typeAction';
import {browserHistory} from '../../browser-history';
import {RootReducer} from '../root-reducer';

type Reducer = ReturnType<typeof RootReducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === TypeAction.redirectToRoute) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
