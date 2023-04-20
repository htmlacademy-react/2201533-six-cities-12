import {PlaceData, RawPlace} from '../types/place-data-types';
import {getRandomInt} from './random';
import {makeFakePlace} from './fake-place';
import {Max} from './mocks-const';
import {adaptPlace} from '../store/adapter';
import {makeFakeRawPlace} from './fake-raw-place';

export const getRandomOffers = (): PlaceData[] => Array.from(new Array(getRandomInt(1, Max.favorites)),
  (element, index) => makeFakePlace(index));

export const getFavoritesForDeletingEqual = () => {
  const oldFavorites = getRandomOffers();
  const count = oldFavorites.length;
  const id = getRandomInt(0, count - 1);
  const newFavorites = Array.from(oldFavorites);
  newFavorites.splice(id, 1);
  return {oldFavorites, newFavorites, id, count};
};

export const getFavoritesForFetchExpect = () => {
  const offers: RawPlace[] = Array.from(new Array(getRandomInt(1, Max.favorites)), (element, index) =>
    makeFakeRawPlace(index));
  return {
    raw: offers,
    proc: Array.from(offers, (offer, index) => adaptPlace(offer, 0))
  };
};
