import {createAction} from '@reduxjs/toolkit';
import {RawPlace, RawPlaceData} from '../types/place-data-types';
import {User} from '../types/types';
import {TypeAction} from './typeAction';
import {AuthorizationStatus, AppRoute} from '../setings';

export const fillOffers = createAction('fillOffers');
export const changeCity = createAction(TypeAction.changeCity, (cityIndex: number) => ({
  payload: cityIndex
}));
export const selectSortingVariant = createAction(TypeAction.selectSortingVariant, (index: number) => ({
  payload: index
}));
export const activateCard = createAction(TypeAction.activateCard, (id: number) => ({
  payload: id
}));
export const loadOffers = createAction(TypeAction.loadOffers, (data: RawPlace[]) => ({
  payload: data
}));
export const addUser = createAction(TypeAction.addUser, (user: User) => ({
  payload: user
}));
export const setLoadedOffers = createAction(TypeAction.setIsOffersLoaded, (loaded: boolean) => ({
  payload: loaded
}));
export const setLoadingOffer = createAction(TypeAction.setOfferLoading, (loading: boolean) => ({
  payload: loading
}));
export const loadOffer = createAction(TypeAction.loadOffer, (data: RawPlaceData) => ({
  payload: data
}));
export const loadNear = createAction(TypeAction.loadNear, (data: RawPlaceData) => ({
  payload: data
}));
export const loadComments = createAction(TypeAction.loadComments, (data: RawPlaceData) => ({
  payload: data
}));
export const setAuthorizationStatus = createAction(TypeAction.setAuthorizationStatus, (status: AuthorizationStatus) => ({
  payload: status
}));
export const redirectToRoute = createAction(TypeAction.redirectToRoute, (route: AppRoute) => ({
  payload: route
}));
export const setEmail = createAction(TypeAction.setEmail, (email: string) => ({
  payload: email
}));
