import {UserProcess} from '../../types/state-types';
import {AuthorizationStatus, DEFAULT_EMAIL, NameSpace} from '../../settings';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {checkAuth, loginAction, logoutAction} from '../api-actions/api-actions';
import {UserType} from '../../types/user-types';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userEmail: DEFAULT_EMAIL
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.userEmail = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuth.fulfilled, (state, action: PayloadAction<UserType>) => {
        state.userEmail = action.payload.email;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action: PayloadAction<UserType>) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userEmail = action.payload.email;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userEmail = DEFAULT_EMAIL;
      });
  }
});

export const {setEmail} = userProcess.actions;
