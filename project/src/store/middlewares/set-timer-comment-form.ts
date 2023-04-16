import {Middleware, PayloadAction} from '@reduxjs/toolkit';
import {Reducer} from '../root-reducer';
import {TypeAction} from '../typeAction';
import {PromiseStates} from '../../types/state-types';
import {resetPostCommentState, setTimer} from '../offer/offer';

export const setTimerCommentForm: Middleware<unknown, Reducer> =
  ({dispatch}) =>
    (next) =>
      (action: PayloadAction) => {
        const slash = action.type.indexOf('/');
        const actionType = action.type.substring(0, slash);
        const actionState = action.type.substring(slash + 1);
        if (actionType === TypeAction.postComment &&
          (actionState === PromiseStates.fulfill || actionState === PromiseStates.reject)) {
          const timerId = setTimeout(() => dispatch(resetPostCommentState()), 5000);
          dispatch(setTimer(timerId));
        }
        return next(action);
      };
