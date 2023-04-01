import {createAsyncThunk} from '@reduxjs/toolkit';
import {loadComments, loadNear, loadOffer, loadOffers, setLoadedOffers, setLoadingOffer} from './actions';
import {APIRoute} from '../setings';
import {api, AppDispatch, RootState, store} from './index';
import {RawPlace, RawPlaceData, Comment} from '../types/place-data-types';
import {TypeAction} from './typeAction';
import {AxiosInstance, AxiosResponse} from 'axios';

const loaders = [
  loadOffer,
  loadNear,
  loadComments
];

export const fetchOffers = createAsyncThunk(
  TypeAction.fetchOffers,
  async () => {
    store.dispatch(setLoadedOffers(false));
    const {data} = await api.get<RawPlace[]>(APIRoute.Offers);
    store.dispatch(loadOffers(data));
    store.dispatch(setLoadedOffers(true));
  },
);

export const fetchOffer = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  TypeAction.fetchOffer,
  async(id, {dispatch, extra: api}) => {
    dispatch(setLoadingOffer(true));
    const results = await Promise.all([
      api.get<RawPlace>(`${APIRoute.Offers}/${id.toString()}`),
      api.get<RawPlace[]>(`${APIRoute.Offers}/${id.toString()}/nearby`),
      api.get<Comment[]>(`${APIRoute.Comments}/${id.toString()}`),
    ]);
    results.forEach((result: AxiosResponse<RawPlaceData>, index) => {
      dispatch(loaders[index](result.data));
    });
    //dispatch(loadOffer(data));
    dispatch(setLoadingOffer(false));
  }
);
