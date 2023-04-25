import {setEmail, userProcess} from './user-process';
import {UserProcess} from '../../types/state-types';
import {AuthorizationStatus, DEFAULT_EMAIL} from '../../settings';
import {getFakeEmail, makeFakeUser} from '../../utils/mocks';
import {checkAuth, loginAction, logoutAction} from '../api-actions/api-actions';


const defaultState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userEmail: DEFAULT_EMAIL,
  isCheckingStatus: false
};

describe('Reducer: userProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(userProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(defaultState);
  });
  it('should assign the received value to the userEmail', () => {
    const email = getFakeEmail();
    const result = {
      authorizationStatus: AuthorizationStatus.Unknown,
      userEmail: email
    };
    expect(userProcess.reducer(defaultState, setEmail(email)))
      .toEqual(result);
  });
  it('should set authorization status and assign email', () => {
    const payload = makeFakeUser;
    const result = {
      authorizationStatus: AuthorizationStatus.Auth,
      userEmail: payload.email
    };
    expect(userProcess.reducer(defaultState, {type: checkAuth.fulfilled.type, payload: payload}))
      .toEqual(result);
  });
  it('should set not authorization status', () => {
    const result = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      userEmail: DEFAULT_EMAIL
    };
    expect(userProcess.reducer(defaultState, {type: checkAuth.rejected.type}))
      .toEqual(result);
  });
  it('should login user, set status and assign email', () => {
    const payload = makeFakeUser;
    const result = {
      authorizationStatus: AuthorizationStatus.Auth,
      userEmail: payload.email
    };
    expect(userProcess.reducer(defaultState, {type: loginAction.fulfilled.type, payload: payload}))
      .toEqual(result);
  });
  it('should not login user, set status "NoAuth"', () => {
    const result = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      userEmail: DEFAULT_EMAIL
    };
    expect(userProcess.reducer(defaultState, {type: loginAction.rejected.type}))
      .toEqual(result);
  });
  it('should logout user, set status "NoAuth"', () => {
    const result = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      userEmail: DEFAULT_EMAIL
    };
    expect(userProcess.reducer(defaultState, {type: logoutAction.fulfilled.type}))
      .toEqual(result);
  });
});
