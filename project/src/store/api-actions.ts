import {createAsyncThunk} from '@reduxjs/toolkit';
import {redirectToRoute} from './actions';
import {APIRoute, AppRoute} from '../settings';
import {AppDispatch, RootState} from './index';
import {RawPlace, RawPlaceData, Comment} from '../types/place-data-types';
import {TypeAction} from './typeAction';
import {AxiosInstance,} from 'axios';
import {AuthType, UserType} from '../types/user-types';
import {saveToken} from '../servises/token';
import {PostCommentType} from '../types/comment-type';
import {loaders} from './adapter';


export const fetchOffers = createAsyncThunk<RawPlace[], undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  TypeAction.fetchOffers,
  async (_,{extra: axiosApi}) => {
    const {data} = await axiosApi.get<RawPlace[]>(APIRoute.Offers);
    return data;
  },
);

export const fetchOffer = createAsyncThunk<RawPlaceData[], number, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  TypeAction.fetchOffer,
  async(id, {extra: axiosApi}) => {
    const results = await Promise.all(
      loaders.map((loader) => axiosApi.get<RawPlaceData>(loader.url(id))));
    return results.map((result) => result.data);
  }
);

export const checkAuth = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  TypeAction.checkAuth,
  async(_,{extra: axiosApi}) => await axiosApi.get(APIRoute.Login)
);

export const loginAction = createAsyncThunk<UserType, AuthType, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  TypeAction.authorization,
  async ({email, password}, {dispatch, extra: axiosApi}) => {
    const {data} = await axiosApi.post<UserType>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Root));
    return data;
  },
);

export const postComment = createAsyncThunk<Comment[], PostCommentType, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  TypeAction.postComment,
  async ({comment, id},
    {extra: axiosApi}) => {
    const url = `${APIRoute.Comments}/${id}`;
    const {data} = await axiosApi.post<Comment[]>(url, comment);
    return data;
  },
);
