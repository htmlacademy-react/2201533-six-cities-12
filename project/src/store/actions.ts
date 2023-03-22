import {createAction} from '@reduxjs/toolkit';

export const fillOffers = createAction('fillOffers');
export const changeCity = createAction('changeCity', (cityIndex: number) => ({
  payload: cityIndex
}));
export const selectSortingVariant = createAction('selectSortingVariant', (index: number) => ({
  payload: index
}));
export const activateCard = createAction('activateCard', (id: number) => ({
  payload: id
}));
