import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  loadComments,
  loadNear,
  loadOffer,
  loadOffers,
  setAuthorizationStatus,
  setLoadedOffers,
  setLoadingOffer,
  redirectToRoute, setEmail
} from './actions';
import {APIRoute, AuthorizationStatus, AppRoute} from '../setings';
import {AppDispatch, RootState} from './index';
import {RawPlace, RawPlaceData, Comment} from '../types/place-data-types';
import {TypeAction} from './typeAction';
import {AxiosInstance, AxiosResponse} from 'axios';
import {AuthType, UserType} from '../types/user-types';
import {saveToken} from '../servises/token';
import {CommentType} from '../types/comment-type';

const loaders = [
  loadOffer,
  loadNear,
  loadComments
];

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  TypeAction.fetchOffers,
  async (_,{dispatch, extra: axiosApi}) => {
    dispatch(setLoadedOffers(false));
    const {data} = await axiosApi.get<RawPlace[]>(APIRoute.Offers);
    dispatch(loadOffers(data));
    dispatch(setLoadedOffers(true));
  },
);

export const fetchOffer = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  TypeAction.fetchOffer,
  async(id, {dispatch, extra: axiosApi}) => {
    dispatch(setLoadingOffer(true));
    const results = await Promise.all([
      axiosApi.get<RawPlace>(`${APIRoute.Offers}/${id.toString()}`),
      axiosApi.get<RawPlace[]>(`${APIRoute.Offers}/${id.toString()}/nearby`),
      axiosApi.get<Comment[]>(`${APIRoute.Comments}/${id.toString()}`),
    ]);
    results.forEach((result: AxiosResponse<RawPlaceData>, index) => {
      dispatch(loaders[index](result.data));
    });
    dispatch(setLoadingOffer(false));
  }
);

export const checkAuth = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  TypeAction.checkAuth,
  async(_,{dispatch, extra: axiosApi}) => {
    try {
      await axiosApi.get(APIRoute.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthType, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  TypeAction.authorization,
  async ({email, password}, {dispatch, extra: axiosApi}) => {
    const {data} = await axiosApi.post<UserType>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(setEmail(data.email));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const postComment = createAsyncThunk<void, CommentType, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  TypeAction.postComment,
  async ({comment, rating},
    {dispatch, getState, extra: axiosApi}) => {
    const url = `${APIRoute.Comments}/${getState().selectedOffer.id}`;
    const {data} = await axiosApi.post<Comment[]>(url, {comment, rating});
    dispatch(loadComments(data));
  },
);
