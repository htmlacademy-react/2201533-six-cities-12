import {Middleware, PayloadAction} from '@reduxjs/toolkit';
import {Reducer} from '../root-reducer';
import {TypeAction} from '../typeAction';
import dayjs from 'dayjs';

export const logTime: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action: PayloadAction) => {
        if (action.type.substring(0, action.type.indexOf('/')) === TypeAction.postComment) {
          console.log(`${dayjs().toISOString()} ${action.type}`);
        }
        return next(action);
      };
