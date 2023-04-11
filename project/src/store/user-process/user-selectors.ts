import {RootState} from '../index';
import {AuthorizationStatus, NameSpace} from '../../settings';

export const getUserEmail = (state: RootState): string => state[NameSpace.User].userEmail;
export const getIsAuth = (state: RootState): boolean => state[NameSpace.User].authorizationStatus === AuthorizationStatus.Auth;
