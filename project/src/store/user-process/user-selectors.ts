import {RootState} from '../index';
import {AuthorizationStatus, NameSpace} from '../../settings';
import {HeaderData} from '../../types/state-types';

export const getIsAuth = (state: RootState): boolean => state[NameSpace.User].authorizationStatus === AuthorizationStatus.Auth;
export const getEmail = (state: RootState): string => state[NameSpace.User].userEmail;
export const getHeaderData = (state: RootState): HeaderData => ({
  isAuth: state[NameSpace.User].authorizationStatus === AuthorizationStatus.Auth,
  email: state[NameSpace.User].userEmail
});
