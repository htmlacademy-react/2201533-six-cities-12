import {RootState} from '../index';
import {AuthorizationStatus, NameSpace} from '../../settings';
import {HeaderData} from '../../types/state-types';
import {createSelector} from '@reduxjs/toolkit';

export const selectIsAuth = (state: RootState): boolean => state[NameSpace.User].authorizationStatus === AuthorizationStatus.Auth;
export const selectEmail = (state: RootState): string => state[NameSpace.User].userEmail;
export const selectHeaderData = createSelector([selectEmail, selectIsAuth],
  (email, isAuth): HeaderData => ({isAuth, email}));
export const selectIsChecking = (state: RootState): boolean => state[NameSpace.User].isCheckingStatus;
