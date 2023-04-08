import {Middleware, PayloadAction} from '@reduxjs/toolkit';
import {reducer} from '../reducer';
import {TypeAction} from '../typeAction';
import {browserHistory} from '../../browser-history';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === TypeAction.redirectToRoute) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
